import '../styles/skeleton.css';

import React from 'react';
type HeaderProps = { onSearch?: (q: string)=>void };
export default function Header({ onSearch }: HeaderProps) {
  return (
    <header className='header'>
      <div className='header__row container'>
        <h1 style={{margin:0,fontSize:'1.15rem',fontWeight:800}}>Prisma News</h1>
        <input className='input' placeholder='Поиск…' aria-label='Поиск' onChange={e => onSearch?.(e.target.value)} />
      </div>
    </header>
  );
}
