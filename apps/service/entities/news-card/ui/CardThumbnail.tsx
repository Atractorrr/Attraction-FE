import React from 'react'
import { ImageBox } from '@/shared/ui'

interface CardThumbnailProps {
  imgSrc: string
  alt: string
  readingPercentage: number
  readingTime: number
}

const AFTER_WIDTH_PERCENT = [
  'after:w-[0%]',
  'after:w-[1%]',
  'after:w-[2%]',
  'after:w-[3%]',
  'after:w-[4%]',
  'after:w-[5%]',
  'after:w-[6%]',
  'after:w-[7%]',
  'after:w-[8%]',
  'after:w-[9%]',
  'after:w-[10%]',
  'after:w-[11%]',
  'after:w-[12%]',
  'after:w-[13%]',
  'after:w-[14%]',
  'after:w-[15%]',
  'after:w-[16%]',
  'after:w-[17%]',
  'after:w-[18%]',
  'after:w-[19%]',
  'after:w-[20%]',
  'after:w-[21%]',
  'after:w-[22%]',
  'after:w-[23%]',
  'after:w-[24%]',
  'after:w-[25%]',
  'after:w-[26%]',
  'after:w-[27%]',
  'after:w-[28%]',
  'after:w-[29%]',
  'after:w-[30%]',
  'after:w-[31%]',
  'after:w-[32%]',
  'after:w-[33%]',
  'after:w-[34%]',
  'after:w-[35%]',
  'after:w-[36%]',
  'after:w-[37%]',
  'after:w-[38%]',
  'after:w-[39%]',
  'after:w-[40%]',
  'after:w-[41%]',
  'after:w-[42%]',
  'after:w-[43%]',
  'after:w-[44%]',
  'after:w-[45%]',
  'after:w-[46%]',
  'after:w-[47%]',
  'after:w-[48%]',
  'after:w-[49%]',
  'after:w-[50%]',
  'after:w-[51%]',
  'after:w-[52%]',
  'after:w-[53%]',
  'after:w-[54%]',
  'after:w-[55%]',
  'after:w-[56%]',
  'after:w-[57%]',
  'after:w-[58%]',
  'after:w-[59%]',
  'after:w-[60%]',
  'after:w-[61%]',
  'after:w-[62%]',
  'after:w-[63%]',
  'after:w-[64%]',
  'after:w-[65%]',
  'after:w-[66%]',
  'after:w-[67%]',
  'after:w-[68%]',
  'after:w-[69%]',
  'after:w-[70%]',
  'after:w-[71%]',
  'after:w-[72%]',
  'after:w-[73%]',
  'after:w-[74%]',
  'after:w-[75%]',
  'after:w-[76%]',
  'after:w-[77%]',
  'after:w-[78%]',
  'after:w-[79%]',
  'after:w-[80%]',
  'after:w-[81%]',
  'after:w-[82%]',
  'after:w-[83%]',
  'after:w-[84%]',
  'after:w-[85%]',
  'after:w-[86%]',
  'after:w-[87%]',
  'after:w-[88%]',
  'after:w-[89%]',
  'after:w-[90%]',
  'after:w-[91%]',
  'after:w-[92%]',
  'after:w-[93%]',
  'after:w-[94%]',
  'after:w-[95%]',
  'after:w-[96%]',
  'after:w-[97%]',
  'after:w-[98%]',
  'after:w-[99%]',
  'after:w-[100%]',
]

export default function CardThumbnail({
  imgSrc,
  alt,
  readingPercentage,
  readingTime,
}: CardThumbnailProps) {
  // TODO: clsx cva 적용 필수

  return (
    <div className="relative justify-end overflow-hidden rounded-lg">
      <ImageBox
        width="w-[20rem]"
        height="h-[10rem]"
        rounded="rounded-lg"
        imgSrc={imgSrc}
        alt={alt}
      />
      <div
        className={`absolute bottom-0 h-1 w-full bg-gray-100 after:absolute after:inset-y-0 after:bg-blue-400 ${AFTER_WIDTH_PERCENT[readingPercentage]}`}
      />
      <div className="absolute bottom-2 right-2 w-fit self-end rounded-md bg-black/60 p-1 text-xs text-white ">
        약 {readingTime}분
      </div>
    </div>
  )
}
