import '../styles/skeleton.css';

import React from 'react';

import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import OfflineBanner from '../components/OfflineBanner';
import SkeletonCard from '../components/SkeletonCard';
import { loadNews } from '../services/news';
import type { NewsItem } from '../types/news';
import { getCache } from '../utils/cache';

export default function Home() {
  const [news, setNews] = React.useState<NewsItem[] | null>(null);
  const [query, setQuery] = React.useState('');
  const [isOnline, setIsOnline] = React.useState<boolean>(navigator.onLine);

  // 0) мгновенный кэш
  React.useEffect(() => {
    const cached = getCache<NewsItem[]>('news.v1');
    if (cached && !news) setNews(cached);
  }, []);

  // 1) загрузка с сети/кэша
  React.useEffect(() => {
    loadNews()
      .then(setNews)
      .catch(() => setNews(prev => prev ?? []));
  }, []);

  // 2) реакция на online/offline
  React.useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  const filtered = React.useMemo(() => {
    if (!news) return null;
    const q = query.trim().toLowerCase();
    if (!q) return news;
    return news.filter(n =>
      [n.title, n.preview, ...(n.tags||[])].join(' ').toLowerCase().includes(q)
    );
  }, [news, query]);

  return (
    <div className='page'>
      {!isOnline && <OfflineBanner />}
      <Header onSearch={setQuery} />
      <main className='container' role='main'>
        {!filtered
          ? (<><SkeletonCard/><SkeletonCard/><SkeletonCard/><SkeletonCard/></>)
          : filtered.length
            ? filtered.map(i => <NewsCard key={i.id} item={i} />)
            : <p style={{opacity:.7}}>Ничего не найдено.</p>}
      </main>
    </div>
  );
}
