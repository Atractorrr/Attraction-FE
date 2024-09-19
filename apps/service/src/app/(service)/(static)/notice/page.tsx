import { NoticeHeader } from '@/features/notice'
import { Header } from '@/widgets/menu'

export default function Page() {
  return (
    <>
      <Header title="공지사항" />
      <div className="rounded-2xl border border-gray-100 bg-white p-6">
        <NoticeHeader />
      </div>
    </>
  )
}
