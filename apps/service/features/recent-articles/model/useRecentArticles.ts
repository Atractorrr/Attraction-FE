import { useQuery } from '@tanstack/react-query'
import { fetchArticles } from '../api'

export default function useRecentArticles(size: number = 5) {
  return useQuery({
    queryKey: ['recent-articles', size],
    queryFn: () => fetchArticles(size),
  })
}
