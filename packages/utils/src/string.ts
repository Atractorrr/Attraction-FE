import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function classNames(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export { cn, classNames as clsx }
