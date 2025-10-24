import '../styles/skeleton.css';

import React from 'react';

import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import SkeletonCard from '../components/SkeletonCard';
import { loadNews } from '../services/news';
import type { NewsItem } from '../types/news';

export default function Home() {
  const [news, setNews] = React.useState<NewsItem[] | null>(null);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    loadNews()
      .then(setNews)
      .catch((e) => {
        console.error('loadNews error:', e);
        setNews([]);
      });
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
