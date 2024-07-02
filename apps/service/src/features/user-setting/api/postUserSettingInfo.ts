const postUserSettingInfo = async (
  value: any,
  type: 'interest' | 'nickname' | 'occupation' | 'expiration',
  email: string,
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/${type}`,
    {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(value),
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error()
    }
    return res.json()
  })

  return data
}
export default postUserSettingInfo
