export interface Pagination {
  size: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  numberOfElements: number
  pageable: {
    offset: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    pageSize: number
    paged: boolean
    pageNumber: number
    unpaged: boolean
  }
  first: boolean
  last: boolean
  empty: boolean
}
