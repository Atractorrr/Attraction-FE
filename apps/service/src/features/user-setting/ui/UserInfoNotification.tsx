import { Container } from '@/shared/ui'
import UserSettingItem from './modal/UserSettingItem'

export default function UserInfoAlert() {
  return (
    <div className="mx-auto w-full md:max-w-xl">
      <Container>
        <div className="mx-auto max-w-xl p-2 md:max-w-none md:p-3">
          <h3 className="px-3 pt-2 text-lg font-bold">알림</h3>
          <UserSettingItem title="앱 푸시 알림" icon="chevron" />
          <UserSettingItem
            title="마케팅 정보 수신 동의"
            subTitle="동의함"
            icon="chevron"
          />
        </div>
      </Container>
    </div>
  )
}
