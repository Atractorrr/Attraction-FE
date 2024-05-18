import * as Entities from '@/entities'

const getThumbnailUrl = (keyword: string) =>
  `https://source.unsplash.com/random/1280x720/?${keyword}`

export const articles: Entities.Article.Types.Article[] = [
  {
    id: 1,
    thumbnailUrl: getThumbnailUrl('newsletter'),
    title: '최신 트렌드에 대한 모든 것을 알아보세요',
    category: 'TREND_LIFE',
    receivedAt: '2024-03-05',
    readPercentage: 0,
    readingTime: 15,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 2,
    thumbnailUrl: getThumbnailUrl('tech'),
    title: '미래를 바꿀 블록체인 기술의 주요 동향',
    category: 'IT_TECH',
    receivedAt: '2024-02-20',
    readPercentage: 68,
    readingTime: 8,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 3,
    thumbnailUrl: getThumbnailUrl('economy'),
    title: '글로벌 경제 전망과 주요 이슈 분석',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-03-10',
    readPercentage: 82,
    readingTime: 2,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 4,
    thumbnailUrl: getThumbnailUrl('ai'),
    title: '인공지능 기술의 현재와 미래에 대한 분석',
    category: 'IT_TECH',
    receivedAt: '2024-02-29',
    readPercentage: 0,
    readingTime: 12,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 5,
    thumbnailUrl: getThumbnailUrl('startup'),
    title: '스타트업 동향 및 성공 전략에 대한 깊이 있는 분석',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-03-15',
    readPercentage: 53,
    readingTime: 4,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 6,
    thumbnailUrl: getThumbnailUrl('environment'),
    title: '지속 가능한 환경을 위한 글로벌 노력',
    category: 'CURRENT_AFFAIRS_SOCIETY',
    receivedAt: '2024-02-18',
    readPercentage: 0,
    readingTime: 18,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 7,
    thumbnailUrl: getThumbnailUrl('health'),
    title: '건강한 생활을 위한 실천 가능한 팁',
    category: 'HEALTH_MEDICINE',
    receivedAt: '2024-03-01',
    readPercentage: 0,
    readingTime: 5,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 8,
    thumbnailUrl: getThumbnailUrl('investment'),
    title: '안전한 투자 전략과 다양한 팁',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-02-25',
    readPercentage: 0,
    readingTime: 7,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 9,
    thumbnailUrl: getThumbnailUrl('data'),
    title: '빅데이터의 중요성과 활용 방안 분석',
    category: 'IT_TECH',
    receivedAt: '2024-03-05',
    readPercentage: 45,
    readingTime: 13,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 10,
    thumbnailUrl: getThumbnailUrl('finance'),
    title: '금융 시장의 최신 동향과 미래 전망',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-02-15',
    readPercentage: 65,
    readingTime: 20,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 11,
    thumbnailUrl: getThumbnailUrl('internet'),
    title: '인터넷 보안의 중요성과 최신 대응 전략',
    category: 'IT_TECH',
    receivedAt: '2024-02-22',
    readPercentage: 75,
    readingTime: 16,
    // isRead: true,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 12,
    thumbnailUrl: getThumbnailUrl('marketing'),
    title: '디지털 마케팅의 효과적인 전략과 실행 방법',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-03-10',
    readPercentage: 0,
    readingTime: 3,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 13,
    thumbnailUrl: getThumbnailUrl('education'),
    title: '현대 교육의 혁신과 미래 도전 과제',
    category: 'CURRENT_AFFAIRS_SOCIETY',
    receivedAt: '2024-02-29',
    readPercentage: 0,
    readingTime: 14,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 14,
    thumbnailUrl: getThumbnailUrl('leadership'),
    title: '성공적인 리더십의 핵심 요소와 발전 방향',
    category: 'BUSINESS_FINANCIAL_TECHNOLOGY',
    receivedAt: '2024-03-20',
    readPercentage: 0,
    readingTime: 11,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 15,
    thumbnailUrl: getThumbnailUrl('food'),
    title: '건강한 식생활을 위한 맛있는 레시피 모음',
    category: 'FOOD',
    receivedAt: '2024-02-17',
    readPercentage: 0,
    readingTime: 19,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 16,
    thumbnailUrl: getThumbnailUrl('travel'),
    title: '국내 여행지 추천 및 유용한 여행 팁',
    category: 'LOCAL_TRAVEL',
    receivedAt: '2024-03-12',
    readPercentage: 0,
    readingTime: 10,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 17,
    thumbnailUrl: getThumbnailUrl('culture'),
    title: '세계 각국의 다양한 문화와 특징 소개',
    category: 'CULTURE_ART',
    receivedAt: '2024-03-07',
    readPercentage: 0,
    readingTime: 0,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 18,
    thumbnailUrl: getThumbnailUrl('design'),
    title: '최신 디자인 트렌드와 창의적인 아이디어',
    category: 'DESIGN',
    receivedAt: '2024-02-28',
    readPercentage: 0,
    readingTime: 6,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 19,
    thumbnailUrl: getThumbnailUrl('entertainment'),
    title: '연예계 소식과 인기 유명인 인터뷰 모음',
    category: 'ENTERTAINMENT',
    receivedAt: '2024-02-21',
    readPercentage: 0,
    readingTime: 17,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
  {
    id: 20,
    thumbnailUrl: getThumbnailUrl('society'),
    title: '현재 사회 문제와 그에 대한 해결 방안 분석',
    category: 'CURRENT_AFFAIRS_SOCIETY',
    receivedAt: '2024-03-18',
    readPercentage: 0,
    readingTime: 9,
    // isRead: false,
    newsletter: {
      id: 1,
      name: '뉴닉',
      category: 'CURRENT_AFFAIRS_SOCIETY',
      thumbnail:
        'https://app.heybunny.io/_next/image?url=https%3A%2F%2Fassets.heybunny.io%2Fnewsletter%2Fweb%2Fnewneek.png&w=3840&q=75',
    },
  },
]
