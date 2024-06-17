import { cookies } from 'next/headers'

interface ReIssueResponse {
  accessToken: string
}

export async function GET(): Promise<ReIssueResponse> {
  const cookieStore = cookies()
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reissue-token`,
  )
  const data: ReIssueResponse = await response.json()
  const defaultMaxAge = 3600

  if (data.accessToken) {
    cookieStore.set('accessToken', data.accessToken, {
      path: '/',
      maxAge: defaultMaxAge,
      httpOnly: true,
    })
  }

  return { accessToken: data.accessToken }
}
