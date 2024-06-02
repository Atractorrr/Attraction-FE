const postDuplicateName = async (nickname: { nickname: string }) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/join/username-duplicate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nickname),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error('중복확인을 해주세요')
    }
    return res.json()
  })

  return data
}

export default postDuplicateName
