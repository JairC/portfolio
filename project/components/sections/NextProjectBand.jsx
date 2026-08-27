import React from 'react';

export function NextProjectBand({ label = 'NEXT PROJECT', title, href = '#', onClick, density = 'desktop', style = {} }) {
  const isMobile = density === 'mobile';
  if (isMobile) {
    return (
      <a href={href} onClick={onClick} style={{ display: 'block', padding: '36px var(--page-x-mobile) 40px', borderTop: '1px solid var(--border-hairline)', textDecoration: 'none', ...style }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--mono)', lineHeight: 'var(--mono-lh)', letterSpacing: 'var(--mono-tracking)', color: 'var(--text-meta)', marginBottom: 8 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--subtitle)', lineHeight: 'var(--subtitle-lh)', letterSpacing: 'var(--stat-tracking)', color: 'var(--text-primary)' }}>{title}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 32, color: 'var(--text-accent)' }}>→</span>
        </div>
      </a>
    );
  }
  return (
    <a href={href} onClick={onClick} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '100px var(--page-x)', textDecoration: 'none', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexGrow: 1, marginRight: 60 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--mono)', lineHeight: 'var(--mono-lh)', letterSpacing: 'var(--mono-tracking)', color: 'var(--text-meta)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: 'var(--display-l)', lineHeight: 'var(--display-l-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
          {title} <span style={{ color: 'var(--text-accent)' }}>→</span>
        </span>
      </div>
      <div style={{ width: 480, height: 280, background: 'var(--surface-image)', flexShrink: 0 }} />
    </a>
  );
}
