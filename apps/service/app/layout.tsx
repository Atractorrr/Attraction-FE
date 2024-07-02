import { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
