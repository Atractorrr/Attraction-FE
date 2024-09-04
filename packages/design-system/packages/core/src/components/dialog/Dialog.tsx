import React from 'react'
import { XOutline } from '@attraction/icons'
import { cn } from '@attraction/utils'
import { useOutsideClick, useScrollLock } from '@attraction/ds-hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { $variable } from '../../token'
import { Button } from '../button'
import { HiddenText } from '../hidden-text'
import { Dimmed } from '../dimmed'
import { DialogContext, useDialog } from './Dialog.context'
import { handleDialogA11y } from './Dialog.util'
import {
  dialogContainerClassName,
  dialogHeaderClassName,
  dialogTitleClassName,
  dialogContentClassName,
  dialogFooterClassName,
  dialogFooterClassNameWithSpaceModifier,
  dialogVariants,
} from './Dialog.style'
import type {
  DialogCloseButtonProps,
  DialogDecoratorProps,
  DialogProps,
  DialogTitleProps,
} from './Dialog.type'

function Header({ className, ...props }: DialogDecoratorProps) {
  return <div className={cn(dialogHeaderClassName, className)} {...props} />
}

function Title({ as, className, ...props }: DialogTitleProps) {
  const Component = as || 'h2'
  return (
    <Component className={cn(dialogTitleClassName, className)} {...props} />
  )
}

function CloseButton({
  style = {},
  onClick,
  ...props
}: DialogCloseButtonProps) {
  const { close } = useDialog()
  return (
    <Button
      title="닫기"
      size="xs"
      round="full"
      square
      style={{ border: 'none', ...style }}
      onClick={(e) => {
        close?.()
        onClick?.(e)
      }}
      {...props}>
      <XOutline style={{ fontSize: $variable.font.size400 }} />
      <HiddenText>닫기</HiddenText>
    </Button>
  )
}

function Content({ className, ...props }: DialogDecoratorProps) {
  return <div className={cn(dialogContentClassName, className)} {...props} />
}

function Footer({ className, children, ...props }: DialogDecoratorProps) {
  const { size } = useDialog()
  const count = React.useMemo(() => React.Children.count(children), [children])

  if (count > 2 && size !== 'xs') {
    const leftChild = React.useMemo(() => {
      return React.Children.toArray(children).filter((child, i) => {
        return React.isValidElement(child) && i < count - 2
      })
    }, [children])
    const rightChild = React.useMemo(() => {
      return React.Children.toArray(children).filter((child, i) => {
        return React.isValidElement(child) && i >= count - 2
      })
    }, [children])
    return (
      <div
        className={cn(
          dialogFooterClassName,
          dialogFooterClassNameWithSpaceModifier,
          className,
        )}
        {...props}>
        {leftChild}
        <div>{rightChild}</div>
      </div>
    )
  }
  return (
    <div className={cn(dialogFooterClassName, className)} {...props}>
      {children}
    </div>
  )
}

function Dialog({
  open: isOpen,
  onClose,
  size,
  withoutDimmed,
  className,
  children,
  style,
}: DialogProps) {
  const close = React.useCallback(() => onClose?.(), [onClose])
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) onClose?.()
  })

  useScrollLock(isOpen ?? false)

  React.useLayoutEffect(() => {
    if (isOpen) {
      const containerEl = containerRef.current
      handleDialogA11y(containerEl)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={cn(dialogVariants({ size }), className)}>
          <motion.div
            ref={containerRef}
            initial={{
              transform: 'translate(-50%, -42%) scale(0.9)',
              opacity: 0.3,
            }}
            animate={{
              transform: 'translate(-50%, -54%) scale(1)',
              opacity: 1,
            }}
            exit={{
              transform: 'translate(-50%, -42%) scale(0.9)',
              opacity: 0.2,
            }}
            transition={{ ease: 'easeInOut', duration: 0.16 }}
            className={dialogContainerClassName}
            style={style}>
            <DialogContext.Provider value={{ close, size }}>
              {children}
            </DialogContext.Provider>
          </motion.div>
          {!withoutDimmed && (
            <Dimmed
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.16 }}
            />
          )}
        </div>
      )}
    </AnimatePresence>
  )
}

export default Object.assign(Dialog, {
  Header,
  Title,
  CloseButton,
  Content,
  Footer,
})
