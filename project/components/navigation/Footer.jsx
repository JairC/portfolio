import React from 'react';

const DEFAULT_COLUMNS = [
  { heading: 'CONTACT', items: ['hi@yourname.com', '+52 33 0000 0000'] },
  { heading: 'WORK', items: ['Projects', 'Case Studies'] },
  { heading: 'SOCIAL', items: ['LinkedIn', 'Behance', 'Dribbble'] },
];

export function Footer({ density = 'desktop', columns, copyright = '(c) 2026 Your Name', style = {} }) {
  const isMobile = density === 'mobile';
  const cols = columns || DEFAULT_COLUMNS;
  const type = { fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: 'var(--mono-m)', lineHeight: '100%' };
  if (isMobile) {
    return (
      <footer style={{ background: 'var(--surface-inverse)', display: 'flex', flexDirection: 'column', gap: 24, padding: '32px var(--page-x-mobile)', ...style }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...type }}>
          <span style={{ color: 'var(--text-inverse-muted)' }}>{cols[0].heading}</span>
          {cols[0].items.map((i) => <span key={i} style={{ color: 'var(--text-inverse)' }}>{i}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 32, color: 'var(--text-inverse)', ...type }}>
          {cols.slice(1).reduce((all, c) => all.concat(c.items), []).slice(0, 3).map((i) => <span key={i}>{i}</span>)}
        </div>
        <span style={{ color: 'var(--text-meta)', ...type }}>{copyright}</span>
      </footer>
    );
  }
  return (
    <footer style={{ height: 184, boxSizing: 'border-box', background: 'var(--surface-inverse)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '40px var(--page-x)', ...style }}>
      {cols.map((c) => (
        <div key={c.heading} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...type }}>
          <span style={{ color: 'var(--text-inverse-muted)' }}>{c.heading}</span>
          {c.items.map((i) => <span key={i} style={{ color: 'var(--text-inverse)' }}>{i}</span>)}
        </div>
      ))}
      <span style={{ color: 'var(--text-meta)', ...type }}>{copyright}</span>
    </footer>
  );
}
