import React from 'react';
export default function OfflineBanner() {
  return (
    <div style={{
      position:'sticky', top:0, zIndex:20,
      background:'#ffdd57', color:'#3b2f00',
      padding:'8px 12px', borderBottom:'1px solid #00000022'
    }}>
      Вы оффлайн. Показаны данные из кэша.
    </div>
  );
}
