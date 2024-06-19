'use client'

export default async function copy(text: string) {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(text)
    return { status: true }
  }
  return { status: false }
}
