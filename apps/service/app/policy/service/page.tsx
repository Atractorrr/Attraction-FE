import { Metadata } from 'next'
import { Header } from '@/widgets/menu'
import { Container, ServicePolicy } from '@/shared/ui'

export const metadata: Metadata = {
  title: '이용약관',
}

export default function ServicePolicyPage() {
  return (
    <>
      <Header title="이용약관" mobileFixed />
      <Container className="px-5 pb-20 pt-10">
        <ServicePolicy />
      </Container>
    </>
  )
}
