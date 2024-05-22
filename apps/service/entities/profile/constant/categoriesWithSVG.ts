import {
  ComputerEmoji,
  BriefcaseEmoji,
  PaletteBrushEmoji,
  FlameEmoji,
} from '@attraction/icons'
import React, { SVGProps } from 'react'
import { NEWSLETTER_CATEGORY } from '@/shared/constant'
import { NewsletterCategoryName } from '@/shared/type'

type SVGIcon = React.FC<SVGProps<SVGSVGElement>>

const CATEGORIES_WITH_SVG = new Map<NewsletterCategoryName, SVGIcon>([
  [NEWSLETTER_CATEGORY.IT_TECH, ComputerEmoji],
  [NEWSLETTER_CATEGORY.BUSINESS_FINANCIAL_TECHNOLOGY, BriefcaseEmoji],
  [NEWSLETTER_CATEGORY.DESIGN, PaletteBrushEmoji],
  [NEWSLETTER_CATEGORY.TREND_LIFE, FlameEmoji],
])

export default CATEGORIES_WITH_SVG
