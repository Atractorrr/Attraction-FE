import { PropsWithChildren } from 'react'

export default function ArticleLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" style={{ overflow: 'hidden' }}>
      <body
        style={{ margin: '0px auto', padding: '0px', fontSize: '0px' }}
        suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
