import { Metadata } from 'next'
import { Container, ServicePolicy } from '@/shared/ui'

export const metadata: Metadata = {
  title: '이용약관',
}

export default function ServicePolicyPage() {
  return (
    <Container className="px-5 pb-20 pt-10">
      <ServicePolicy />
    </Container>
  )
}
