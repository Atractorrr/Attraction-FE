import * as Entities from '@/entities'

export default async function InboxPage() {
  const { articles } = await Entities.Article.Api.getUserArticles({
    memberId: 12,
    page: 0,
    size: 20,
    sort: 'asc',
  })

  return (
    <div className="mx-auto my-6 max-w-7xl px-5">
      <Entities.Article.UI.ArticleList
        data={articles}
        type="list"
        isArticleView={false}
      />
    </div>
  )
}
