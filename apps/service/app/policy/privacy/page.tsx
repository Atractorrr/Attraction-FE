import { Metadata } from 'next'
import { Container, PrivacyPolicy } from '@/shared/ui'

export const metadata: Metadata = {
  title: '개인정보처리방침',
}

export default function PrivacyPolicyPage() {
  return (
    <Container className="px-5 pb-20 pt-10">
      <PrivacyPolicy />
    </Container>
  )
}
