// eslint-disable-next-line import/no-extraneous-dependencies
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_S3_IMAGE_UPLOAD_REGION as string,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_S3_IMAGE_UPLOAD_ACCESS_KEY as string,
    secretAccessKey: process.env
      .NEXT_PUBLIC_S3_IMAGE_UPLOAD_SECRET_ACCESS_KEY as string,
  },
})

async function uploadFileToS3(file: Buffer, fileName: string, type: string) {
  const fileBuffer = file
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_IMAGE_UPLOAD_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: type,
  }

  const command = new PutObjectCommand(params)
  await s3Client.send(command)

  const s3ImgUrl = `https://${process.env.NEXT_PUBLIC_S3_IMAGE_UPLOAD_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_S3_IMAGE_UPLOAD_REGION}.amazonaws.com/${fileName}`

  return s3ImgUrl
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const file = formData.get('file') as File | null
    if (!file) {
      return NextResponse.json({ error: '파일이 필요합니다' }, { status: 400 })
    }
    const mimeType = file.type
    const buffer = Buffer.from(await file.arrayBuffer())

    const s3ImgUrl = await uploadFileToS3(buffer, file.name, mimeType)

    return NextResponse.json({ s3ImgUrl }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Error uploading file' })
  }
}
