import { Container } from '@/shared/ui'
import UserSettingItem from './modal/UserSettingItem'

export default function UserInfoWithdraw() {
  return (
    <div className="mx-auto w-full md:max-w-xl">
      <Container>
        <div className="mx-auto max-w-xl p-2 md:max-w-none md:p-3">
          <UserSettingItem title="탈퇴하기" icon="chevron" />
        </div>
      </Container>
    </div>
  )
}
