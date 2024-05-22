type TrendNewsLetters = {
  [key: string]: {
    id: number
    newsletterThumbnailUrl: string
    name: string
    description: string
  }[]
}

const RecommendNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=37',
    name: 'Daily News Digest',
    description: 'The latest news from around the world.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=38',
    name: 'Political Pulse',
    description: 'Updates and analysis on political news.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=39',
    name: 'Economic Insights',
    description: 'News and analysis on the global economy.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=40',
    name: 'World Affairs',
    description: 'In-depth analysis on global events.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=41',
    name: 'Science & Tech News',
    description: 'Latest news in science and technology.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=42',
    name: 'Environment Watch',
    description: 'News and updates on environmental issues.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=61',
    name: 'Health Updates',
    description: 'Daily updates on health news.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=62',
    name: 'Business Insights',
    description: 'In-depth business news and analysis.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=63',
    name: 'Tech News Today',
    description: 'Latest technology news and updates.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=64',
    name: 'Global Headlines',
    description: 'Top news stories from around the world.',
  },
]

const ITNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=49',
    name: 'Tech Today',
    description: 'Daily updates on the latest in technology.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=50',
    name: 'Code Weekly',
    description: 'Weekly digest of the best coding tutorials and articles.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=51',
    name: 'AI Insights',
    description: 'In-depth analysis on artificial intelligence trends.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=52',
    name: 'Cyber Security Brief',
    description: 'Latest news and tips on cybersecurity.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=53',
    name: 'Gadget Guru',
    description: 'Reviews and news on the latest gadgets.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=54',
    name: 'Tech World News',
    description: 'Global tech news and innovations.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=65',
    name: 'DevOps Weekly',
    description: 'Updates and tips for DevOps professionals.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=66',
    name: 'Mobile Trends',
    description: 'Latest news in mobile technology.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=67',
    name: 'Cloud Computing',
    description: 'News and insights on cloud technologies.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=68',
    name: 'Tech Innovations',
    description: 'Innovative tech news and updates.',
  },
]

const SocialNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=55',
    name: 'Social Pulse',
    description: 'Latest trends and insights in social media.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=56',
    name: 'Civic Update',
    description: 'News and updates on civic engagement.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=57',
    name: 'Community Connect',
    description: 'Stories and news about community projects.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=58',
    name: 'Activism Weekly',
    description: 'Updates on social justice and activism efforts.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=59',
    name: 'Policy Matters',
    description: 'Insights on public policies and their impact.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=60',
    name: 'Social Trends',
    description: 'Analyzing the latest trends in society.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=69',
    name: 'Human Rights Watch',
    description: 'Updates on global human rights issues.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=70',
    name: 'Public Opinion',
    description: 'Analysis of public opinion and polls.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=71',
    name: 'Nonprofit News',
    description: 'News and updates from the nonprofit sector.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=72',
    name: 'Volunteering Today',
    description: 'Opportunities and news about volunteering.',
  },
]

const TrendLifeNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=1',
    name: 'Life Trends Daily',
    description: 'Daily updates on the latest lifestyle trends.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=2',
    name: 'Fashion Forward',
    description: 'The latest in fashion and style trends.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=3',
    name: 'Healthy Living',
    description: 'Tips and trends for a healthier lifestyle.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=4',
    name: 'Home & Decor',
    description: 'Trends in home decoration and interior design.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=5',
    name: 'Wellness Weekly',
    description: 'Updates on wellness and self-care.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=6',
    name: 'Travel Trends',
    description: 'The latest trends in travel and exploration.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=73',
    name: 'Fitness Frenzy',
    description: 'Trends and tips in fitness and exercise.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=74',
    name: 'Mindful Living',
    description: 'Tips and trends in mindfulness and meditation.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=75',
    name: 'Healthy Recipes',
    description: 'Delicious and healthy recipes.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=76',
    name: 'Style Guide',
    description: 'The latest trends in fashion and style.',
  },
]

const EntertainmentNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=7',
    name: 'Entertainment Daily',
    description: 'Daily updates on movies, TV shows, and more.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=8',
    name: 'Celebrity Buzz',
    description: 'The latest news on celebrities and pop culture.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=9',
    name: 'Music Matters',
    description: 'Updates on the music industry and new releases.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=10',
    name: 'Film Fanatic',
    description: 'In-depth reviews and news about the latest films.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=11',
    name: 'TV Time',
    description: 'The latest news and reviews on TV shows.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=12',
    name: 'Gaming Gurus',
    description: 'News and reviews on the latest video games.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=77',
    name: 'Streaming Spotlight',
    description: 'Updates and reviews on streaming services.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=78',
    name: 'Pop Culture Roundup',
    description: 'The latest in pop culture and entertainment.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=79',
    name: 'Theater Talk',
    description: 'News and reviews on theater and Broadway.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=80',
    name: 'Comic Con News',
    description: 'Updates on comic conventions and fandoms.',
  },
]

const BizFinanceNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=13',
    name: 'Market Watch',
    description: 'Daily updates on the stock market and economy.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=14',
    name: 'Startup Insights',
    description: 'News and tips for entrepreneurs and startups.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=15',
    name: 'Investment Weekly',
    description: 'Tips and analysis for smart investments.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=16',
    name: 'Financial Times',
    description: 'Insights on the latest financial news.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=17',
    name: 'Economy Watch',
    description: 'Updates on the global economy.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=18',
    name: 'Business Today',
    description: 'Daily news on the business world.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=19',
    name: 'Entrepreneur Weekly',
    description: 'Tips and stories for entrepreneurs.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=20',
    name: 'Global Finance',
    description: 'News and insights on global finance.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=21',
    name: 'Stock Market Updates',
    description: 'Daily updates on stock market trends.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=22',
    name: 'Economic Review',
    description: 'In-depth analysis on economic trends.',
  },
]

const LocalTravelNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=19',
    name: 'City Explorer',
    description: 'Discover the hidden gems in your city.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=20',
    name: 'Weekend Getaways',
    description: 'The best weekend travel spots.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=21',
    name: 'Adventure Awaits',
    description: 'Top destinations for adventure travel.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=22',
    name: 'Cultural Journeys',
    description: 'Explore the culture and history of different places.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=23',
    name: 'Travel Tips',
    description: 'Essential tips for travelers.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=24',
    name: 'Nature Escapes',
    description: 'Best places to experience nature and wildlife.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=61',
    name: 'Urban Adventures',
    description: 'Explore urban areas with a sense of adventure.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=62',
    name: 'Culinary Travels',
    description: 'Discover the best food destinations.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=63',
    name: 'Historical Sites',
    description: 'Visit places with rich historical backgrounds.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=64',
    name: 'Luxury Escapes',
    description: 'Experience luxury travel at its finest.',
  },
]

const FoodNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=25',
    name: 'Foodie Finds',
    description: 'Discover the best food and drink spots.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=26',
    name: 'Recipe Central',
    description: 'Delicious recipes delivered to your inbox.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=27',
    name: 'Healthy Eats',
    description: 'Recipes and tips for healthy eating.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=28',
    name: 'Gourmet Guide',
    description: 'Explore gourmet food and cooking techniques.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=29',
    name: 'Baking Bliss',
    description: 'The best baking recipes and tips.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=30',
    name: 'Drink Digest',
    description: 'News and recipes for cocktails and beverages.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=65',
    name: 'Vegan Delights',
    description: 'Delicious vegan recipes and tips.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=66',
    name: 'Global Flavors',
    description: 'Explore recipes from around the world.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=67',
    name: 'Quick Bites',
    description: 'Easy and quick recipes for busy people.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=68',
    name: 'Culinary Tips',
    description: 'Tips and tricks for improving your cooking skills.',
  },
]

const DesignNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=31',
    name: 'Design Daily',
    description: 'Daily inspiration and news in design.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=32',
    name: 'Graphic Genius',
    description: 'The latest trends in graphic design.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=33',
    name: 'Interior Insights',
    description: 'Updates on interior design and decor.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=34',
    name: 'Fashion Design',
    description: 'Trends and news in fashion design.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=35',
    name: 'Web Wonders',
    description: 'News and tips for web design.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=36',
    name: 'Creative Concepts',
    description: 'Innovative ideas and concepts in design.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=69',
    name: 'Product Design',
    description: 'Latest trends in product design.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=70',
    name: 'Animation Insights',
    description: 'News and trends in animation.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=71',
    name: 'UX/UI Trends',
    description: 'Updates on UX/UI design best practices.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=72',
    name: 'Design Technology',
    description: 'Advancements in design technology.',
  },
]

const HobbyNewsletters = [
  {
    id: 1,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=43',
    name: 'Hobby Hub',
    description: 'Explore new hobbies and activities.',
  },
  {
    id: 2,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=44',
    name: 'Crafting Corner',
    description: 'Ideas and tips for crafting projects.',
  },
  {
    id: 3,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=45',
    name: 'Gardening Guide',
    description: 'Tips and trends in gardening.',
  },
  {
    id: 4,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=46',
    name: 'Photography Focus',
    description: 'Tips and news for photography enthusiasts.',
  },
  {
    id: 5,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=47',
    name: 'DIY Projects',
    description: 'Do-it-yourself project ideas and guides.',
  },
  {
    id: 6,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=48',
    name: 'Fitness Fanatic',
    description: 'News and tips for fitness and exercise.',
  },
  {
    id: 7,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=73',
    name: 'Model Making',
    description: 'Tips and tricks for model making enthusiasts.',
  },
  {
    id: 8,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=74',
    name: 'Knitting & Crochet',
    description: 'Patterns and tips for knitting and crochet.',
  },
  {
    id: 9,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=75',
    name: 'Woodworking Wonders',
    description: 'Guides and tips for woodworking projects.',
  },
  {
    id: 10,
    newsletterThumbnailUrl: 'https://picsum.photos/200/300?random=76',
    name: 'Music & Instruments',
    description: 'News and tips for music enthusiasts and instrument players.',
  },
]

export const trendNewsLetters: TrendNewsLetters = {
  RECOMMEND: RecommendNewsletters,
  IT_TECH: ITNewsletters,
  CURRENT_AFFAIRS_SOCIETY: SocialNewsletters,
  TREND_LIFE: TrendLifeNewsletters,
  ENTERTAINMENT: EntertainmentNewsletters,
  BUSINESS_FINANCIAL_TECHNOLOGY: BizFinanceNewsletters,
  LOCAL_TRAVEL: LocalTravelNewsletters,
  FOOD: FoodNewsletters,
  DESIGN: DesignNewsletters,
  HOBBY_SELF_DEVELOPMENT: HobbyNewsletters,
}
