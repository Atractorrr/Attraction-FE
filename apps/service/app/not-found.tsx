import { Container, NotFound } from '@/shared/ui'

export default function NotFoundPage() {
  return (
    <Container>
      <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
        <NotFound />
      </div>
    </Container>
  )
}
