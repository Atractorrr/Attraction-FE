import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function twClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classNames(...inputs: ClassValue[]) {
  return clsx(inputs)
}
