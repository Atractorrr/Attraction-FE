import { Header } from '@/widgets/menu'
import { Container, Offline } from '@/shared/ui'

export default function OfflinePage() {
  return (
    <>
      <Header title="" />
      <Container>
        <div className="flex min-h-96 w-full items-center justify-center px-5 pb-32 pt-20">
          <Offline />
        </div>
      </Container>
    </>
  )
}
