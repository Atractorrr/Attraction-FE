import { CheckFormDataWithoutNullType } from '../model'

const postUserSettingForm = async ({
  formData,
  email,
}: {
  formData: CheckFormDataWithoutNullType
  email: string
}) => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify(formData),
  }).then((res) => {
    if (!res.ok) {
      throw new Error()
    }
    return res.json()
  })
}

export default postUserSettingForm
