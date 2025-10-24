import type { NewsItem } from '../types/news';
export async function loadNews(): Promise<NewsItem[]> {
  const res = await fetch('/news.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load news.json');
  const data: NewsItem[] = await res.json();
  return data.slice().sort((a,b)=> new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
