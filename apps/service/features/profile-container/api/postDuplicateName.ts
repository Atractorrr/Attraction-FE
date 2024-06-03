const postDuplicateName = async (request: { nickname: string }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/username-duplicate`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(request),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error()
    }
    return res.json()
  })

  return data
}
export default postDuplicateName
