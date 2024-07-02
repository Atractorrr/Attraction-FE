import {
  ComputerEmoji,
  BriefcaseEmoji,
  PaletteBrushEmoji,
  FlameEmoji,
  FilmEmoji,
  HouseEmoji,
  AirplaneEmoji,
  HotdogEmoji,
  NewspaperEmoji,
  TableTennisEmoji,
  PaintingEmoji,
  PurseEmoji,
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
  [NEWSLETTER_CATEGORY.ENTERTAINMENT, FilmEmoji],
  [NEWSLETTER_CATEGORY.LIVING_INTERIOR, HouseEmoji],
  [NEWSLETTER_CATEGORY.LOCAL_TRAVEL, AirplaneEmoji],
  [NEWSLETTER_CATEGORY.FOOD, HotdogEmoji],
  [NEWSLETTER_CATEGORY.CURRENT_AFFAIRS_SOCIETY, NewspaperEmoji],
  [NEWSLETTER_CATEGORY.HOBBY_SELF_DEVELOPMENT, TableTennisEmoji],
  [NEWSLETTER_CATEGORY.CULTURE_ART, PaintingEmoji],
  [NEWSLETTER_CATEGORY.ECONOMY, PurseEmoji],
])

export default CATEGORIES_WITH_SVG
