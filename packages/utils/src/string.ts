import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function twcn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
