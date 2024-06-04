import { useState } from 'react'

const useImgUpload = () => {
  const [imgSrc, setImgSrc] = useState<string>()

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const binaryData = [file]
      const urlImage = URL.createObjectURL(
        new Blob(binaryData, { type: 'image' }),
      )

      setImgSrc(urlImage)
    }
  }

  return { imgSrc, fileUploadHandler, setImgSrc }
}

export default useImgUpload
