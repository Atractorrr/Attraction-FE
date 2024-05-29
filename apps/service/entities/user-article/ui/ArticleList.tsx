import { Article, ViewType } from '../model'
import CardItem from './CardItem'

interface ArticleListProps {
  data: Article[]
  type?: ViewType
  isArticleView?: boolean
}

export default function ArticleList({
  data,
  type = 'gallery',
  isArticleView,
}: ArticleListProps) {
  return (
    <ul
      className={`grid grid-cols-1 gap-x-4 gap-y-6 ${
        !isArticleView &&
        (type === 'list'
          ? 'md:grid-cols-2'
          : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')
      }`}>
      {data.map((article) => (
        <li key={article.id}>
          <CardItem data={article} type={type} />
        </li>
      ))}
    </ul>
  )
}
