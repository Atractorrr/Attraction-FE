import { Container } from '@/shared/ui'
import UserSettingItem from './modal/UserSettingItem'

export default function UserInfoWithdraw() {
  return (
    <Container className="w-full max-w-[600px] rounded-2xl p-6">
      <UserSettingItem title="탈퇴하기" icon="chevron" />
    </Container>
  )
}
