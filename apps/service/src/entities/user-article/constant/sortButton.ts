import type { SortType } from '../model'

export const SORT_LABEL: Record<SortType, string> = {
  'receivedAt,desc': '최신 순',
  'receivedAt,asc': '오래된 순',
}

export const SORT_MENU: Array<[SortType, string]> = [
  ['receivedAt,desc', SORT_LABEL['receivedAt,desc']],
  ['receivedAt,asc', SORT_LABEL['receivedAt,asc']],
]
