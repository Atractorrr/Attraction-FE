import { useRef, useState } from 'react'

export const useImgUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
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

  return { fileInputRef, imgSrc, fileUploadHandler }
}
