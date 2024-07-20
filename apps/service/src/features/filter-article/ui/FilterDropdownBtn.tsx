import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import { AdjustmentHorizontalOutline, RefreshOutline } from '@attraction/icons'
import { SortType } from '@/entities/user-article'
import CategoryDropdown, { CategoryDropdownProps } from './CategoryDropdown'
import FilterButton from './FilterButton'

type FilterDropdownProps = CategoryDropdownProps & {
  sortType: SortType
  setSortType: (type: SortType) => void
}

const sortTypeBtns: Array<[SortType, string]> = [
  ['receivedAt,desc', '최신순'],
  ['receivedAt,asc', '오래된순'],
]

export default function FilterDropdownBtn({
  sortType,
  setSortType,
  selectedCategory,
  setCategory,
}: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <FilterButton active={!!selectedCategory} title="필터 설정">
          <AdjustmentHorizontalOutline className="text-lg xs:text-xl" />
          <span className="whitespace-nowrap pr-1 text-sm xs:text-base">
            필터
          </span>
        </FilterButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>카테고리</DropdownMenuLabel>
        <CategoryDropdown
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        <DropdownMenuSeparator />
        <DropdownMenuLabel>정렬</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={sortType}>
          {sortTypeBtns.map(([type, label]) => (
            <DropdownMenuRadioItem
              key={type}
              value={type}
              title={`정렬: ${label}`}
              onClick={() => setSortType(type)}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          title="아티클 필터 초기화"
          onClick={() => {
            setCategory(undefined)
            setSortType('receivedAt,desc')
          }}>
          <RefreshOutline className="text-lg" />
          <span className="ml-2 whitespace-nowrap">초기화</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
