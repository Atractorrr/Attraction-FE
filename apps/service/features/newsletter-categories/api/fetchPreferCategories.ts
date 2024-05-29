export default async function fetchPreferCategories(email: string) {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/categories`,
  )

  apiURL.searchParams.set('email', email)

  const res = await fetch(apiURL)

  return res.json()
}
