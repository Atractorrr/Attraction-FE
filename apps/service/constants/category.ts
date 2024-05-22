import {
  NewsletterCategory,
  NewsletterCategoryName,
} from '@/features/newsletterCategories/model'

export const NEWSLETTER_CATEGORY = {
  RECOMMEND: '추천',
  TREND_LIFE: '트렌드/라이프',
  ENTERTAINMENT: '엔터테인먼트',
  BUSINESS_FINANCIAL_TECHNOLOGY: '비즈/재테크',
  LOCAL_TRAVEL: '지역/여행',
  FOOD: '푸드',
  IT_TECH: 'IT/테크',
  DESIGN: '디자인',
  CURRENT_AFFAIRS_SOCIETY: '시사/사회',
  HOBBY_SELF_DEVELOPMENT: '취미/자기개발',
  CULTURE_ART: '문화/예술',
  LIVING_INTERIOR: '리빙/인테리어',
  HEALTH_MEDICINE: '건강/의학',
} as const

export const NEWSLETTER_CATEGORY_KEYS: NewsletterCategory[] = Object.keys(
  NEWSLETTER_CATEGORY,
) as NewsletterCategory[]

export const NEWSLETTER_CATEGORY_LIST: NewsletterCategoryName[] = Object.values(
  NEWSLETTER_CATEGORY,
) as NewsletterCategoryName[]
