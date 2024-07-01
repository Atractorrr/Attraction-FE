import { Container, NotFound } from '@/shared/ui'

import '@/public/fonts/fonts.css'
import './globals.css'
import '@attraction/design-system/dist/index.css'

export default function NotFoundPage() {
  return (
    <body className="service md:p-10" suppressHydrationWarning>
      <script src="/script/theme.js" />
      <div className="mx-auto w-full max-w-7xl">
        <Container>
          <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
            <NotFound />
          </div>
        </Container>
      </div>
    </body>
  )
}
