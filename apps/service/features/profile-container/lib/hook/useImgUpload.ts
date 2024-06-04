import { useState } from 'react'

const useImgUpload = () => {
  const [fileInfo, setFileInfo] = useState({ name: '', size: 0, src: '' })

  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const binaryData = [file]

      const urlImage = URL.createObjectURL(
        new Blob(binaryData, { type: 'image' }),
      )

      setFileInfo({ name: file.name, size: file.size, src: urlImage })
    }
  }

  return { fileUploadHandler, fileInfo, setFileInfo }
}

export default useImgUpload
