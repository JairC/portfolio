import React from 'react';

export function Navbar({ wordmark = 'papi(r)', links = ['PROJECTS', 'ABOUT', 'CONTACT'], activeLink, density = 'desktop', onNavigate, style = {} }) {
  const isMobile = density === 'mobile';
  const markSize = isMobile ? 'var(--mono-m)' : 'var(--mono-l)';
  const linkSize = isMobile ? 'var(--mono-s)' : 'var(--mono)';
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: isMobile ? 'auto' : 'var(--nav-h)',
      padding: isMobile ? '20px var(--page-x-mobile)' : '32px var(--page-x)',
      boxSizing: 'border-box',
      borderBottom: '1px solid var(--border-hairline)',
      ...style,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: markSize, lineHeight: 'var(--mono-l-lh)', color: 'var(--text-primary)' }}>{wordmark}</span>
      <div style={{ display: 'flex', gap: isMobile ? 20 : 32, fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: linkSize, lineHeight: 'var(--mono-lh)', letterSpacing: 'var(--mono-tracking)', color: 'var(--text-muted)' }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate(l); }}
             style={{ color: l === activeLink ? 'var(--text-primary)' : 'inherit', textDecoration: 'none' }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}
