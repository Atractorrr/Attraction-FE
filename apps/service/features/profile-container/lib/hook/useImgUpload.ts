import { useState } from 'react'

const useImgUpload = () => {
  const [fileInfo, setFileInfo] = useState<File>()

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      setFileInfo(file)
    }
  }

  const getS3ImgUrl = async () => {
    if (!fileInfo) return undefined

    const formData = new FormData()
    formData.append('file', fileInfo)

    const s3ImageUrl = await fetch('/api/s3-upload', {
      method: 'POST',
      body: formData,
    })

    return s3ImageUrl.json() as Promise<{ s3ImgUrl: string }>
  }

  const deleteImgUrl = () => {
    setFileInfo(undefined)
  }

  return { fileUploadHandler, fileInfo, deleteImgUrl, getS3ImgUrl }
}

export default useImgUpload
