import { Header } from '@/widgets/menu'

export default function AnnouncementLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Header title="공지사항" />
      {children}
    </>
  )
}
