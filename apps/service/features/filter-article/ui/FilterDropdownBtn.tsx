import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@attraction/design-system/dist'
import { AdjustmentHorizontalOutline } from '@attraction/icons'
import { SortType } from '@/entities/user-article'
import CategoryDropdown, { CategoryDropdownProps } from './CategoryDropdown'

type FilterDropdownProps = CategoryDropdownProps & {
  sortType: SortType
  setSortType: (type: SortType) => void
}

const sortTypeBtns: Array<[SortType, string]> = [
  ['receivedAt,asc', '최신순'],
  ['receivedAt,desc', '오래된순'],
]

export default function FilterDropdownBtn({
  sortType,
  setSortType,
  userId,
  selectedCategory,
  setCategory,
  resetCategory,
}: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`xs:text-xl flex items-center justify-center gap-2 rounded-lg px-3  py-2 text-lg transition-colors ${
            selectedCategory
              ? 'bg-gray-700 text-gray-50 dark:bg-gray-50 dark:text-gray-700'
              : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
          title="필터 설정">
          <AdjustmentHorizontalOutline />
          <span className="xs:text-base whitespace-nowrap pr-1 text-sm">
            필터
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>카테고리</DropdownMenuLabel>
        <CategoryDropdown
          userId={userId}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          resetCategory={resetCategory}
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
