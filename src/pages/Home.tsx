import '../styles/skeleton.css';

import React from 'react';

import Header from '../components/Header';
import SkeletonCard from '../components/SkeletonCard';

export default function Home() {
  return (
    <div className='page'>
      <Header />
      <main className='container' role='main'>
        {/* Первичная загрузка — показываем 4 скелетона */}
        <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
      </main>
    </div>
  );
}
