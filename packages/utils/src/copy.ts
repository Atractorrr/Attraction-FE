export async function copy(value: string) {
  if (navigator?.clipboard) {
    await navigator.clipboard.writeText(value)
    return true
  }
  return false
}
