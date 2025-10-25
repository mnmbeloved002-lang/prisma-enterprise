import type { NewsItem } from '../types/news';
import { getCache,setCache } from '../utils/cache';

const CACHE_KEY = 'news.v1';
const TTL_MS = 15 * 60 * 1000; // 15 минут

export async function loadNews(): Promise<NewsItem[]> {
  // 1) мгновенно пытаемся отдать кэш (если живой)
  const cached = getCache<NewsItem[]>(CACHE_KEY);
  if (cached) return cached.slice();

  // 2) иначе тянем сеть
  const res = await fetch('/news.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load news.json');
  const data: NewsItem[] = await res.json();

  const sorted = data
    .slice()
    .sort((a,b)=> new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // 3) кладём в кэш
  setCache<NewsItem[]>(CACHE_KEY, sorted, TTL_MS);
  return sorted;
}
