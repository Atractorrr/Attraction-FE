'use client'

interface ReturnTypeOfShare {
  status: boolean
}

export default async function copy(text: string): Promise<ReturnTypeOfShare> {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(text)
    return { status: true }
  }
  return { status: false }
}
