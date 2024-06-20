export default async function subscribeNewsletter(
  email: string,
  newsletterId: string,
) {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/subscribe/${newsletterId}`,
  )
  const res = await fetch(apiURL.href, {
    method: 'PUT',
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
