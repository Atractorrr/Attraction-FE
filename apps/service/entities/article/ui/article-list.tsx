import type { Article, ViewType } from '../types'
import CardItem from './card-item'

export default function ArticleList({
  data,
  type,
  isArticleView,
}: {
  data: Article[]
  type?: ViewType
  isArticleView: boolean
}) {
  return (
    <ul
      className={
        'grid gap-x-4 gap-y-6 ' +
        (isArticleView
          ? ''
          : type === 'list'
            ? 'md:grid-cols-2'
            : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4')
      }>
      {data.map((article) => (
        <li key={article.id}>
          <CardItem data={article} type={type} />
        </li>
      ))}
    </ul>
  )
}
