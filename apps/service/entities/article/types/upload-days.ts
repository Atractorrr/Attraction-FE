import { UPLOAD_DAYS } from '../constants'

export type UploadDays = keyof typeof UPLOAD_DAYS

export type ValueOfUploadDays = (typeof UPLOAD_DAYS)[UploadDays]
