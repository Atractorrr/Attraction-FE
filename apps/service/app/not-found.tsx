import { Metadata } from 'next'
import { Container, NotFound } from '@/shared/ui'
import { Header } from '@/widgets/menu'

export const metadata: Metadata = {
  title: '404',
}

export default function NotFoundPage() {
  return (
    <>
      <Header title="" />
      <Container>
        <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
          <NotFound />
        </div>
      </Container>
    </>
  )
}
