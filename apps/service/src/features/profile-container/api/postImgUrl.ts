const postImgUrl = async ({
  fileImgSrc,
  email,
  type,
}: {
  fileImgSrc: string
  email: string
  type: 'profile' | 'background'
}) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/${type === 'profile' ? 'profile' : 'background'}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileImgSrc }),
    },
  )
  return data
}

export default postImgUrl
