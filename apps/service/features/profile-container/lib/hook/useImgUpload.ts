import { useState } from 'react'

const useImgUpload = () => {
  const [imgSrc, setImgSrc] = useState<string>()
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0 })

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const binaryData = [file]

      const urlImage = URL.createObjectURL(
        new Blob(binaryData, { type: 'image' }),
      )

      setFileInfo({ name: file.name, size: file.size })

      setImgSrc(urlImage)
    }
  }

  return { imgSrc, fileUploadHandler, setImgSrc, fileInfo }
}

export default useImgUpload
