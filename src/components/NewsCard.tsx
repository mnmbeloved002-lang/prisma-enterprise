import '../styles/skeleton.css';

import React from 'react';

import type { NewsItem } from '../types/news';

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className='card'>
      <div className='card__media'>
        <img
          src={item.image}
          alt={item.title}
          loading='lazy'
          decoding='async'
          style={{ width:'100%', height:'100%', objectFit:'cover' }}
        />
      </div>
      <h2 className='card__title'>{item.title}</h2>
      <div className='card__meta'>
        {item.source} • {new Date(item.publishedAt).toLocaleString()}
      </div>
      <p style={{opacity:.9, margin:0}}>{item.preview}</p>
      <a href={item.url} target='_blank' rel='noreferrer' style={{fontWeight:700}}>
        Читать →
      </a>
    </article>
  );
}
