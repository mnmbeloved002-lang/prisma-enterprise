import '../styles/skeleton.css';

import React from 'react';

export default function SkeletonCard() {
  return (
    <article className='card' aria-hidden='true'>
      <div className='card__media skeleton'></div>
      <div className='skeleton' style={{ height: 18, borderRadius: 8 }} />
      <div className='skeleton' style={{ height: 14, width: '70%', borderRadius: 8 }} />
    </article>
  );
}
