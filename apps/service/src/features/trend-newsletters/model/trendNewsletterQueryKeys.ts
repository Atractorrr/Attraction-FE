import { TrendNewsletterParams } from './type'

const trendNewsletterQueryKeys = {
  trendNewsletters: (params: TrendNewsletterParams) => [
    'trend-newsletters',
    params,
  ],
  preferCategories: (params: string | undefined) => [
    'prefer-categories',
    params,
  ],
}

export default trendNewsletterQueryKeys
