import React from 'react';
import { PlaceholderSlot } from '../core/PlaceholderSlot.jsx';
import { Rule } from '../core/Rule.jsx';

export function ResultsBand({ label = 'RESULTS', value, caption, density = 'desktop', style = {} }) {
  const isMobile = density === 'mobile';
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center',
      padding: isMobile ? '40px 0' : '90px var(--page-x)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style,
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'var(--mono-m)', lineHeight: '100%', color: 'var(--text-meta)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: isMobile ? 40 : 'var(--display-m)', lineHeight: isMobile ? '44px' : 'var(--display-m-lh)', letterSpacing: 'var(--stat-tracking)', color: 'var(--text-stat)' }}>{value}</span>
      <Rule style={{ alignSelf: 'stretch' }} />
      {caption
        ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--mono)', lineHeight: '20px', color: 'var(--text-muted)', textAlign: 'center' }}>{caption}</span>
        : <PlaceholderSlot style={{ padding: '14px 24px', textAlign: 'center' }}>RESULTS CAPTION PLACEHOLDER</PlaceholderSlot>}
    </section>
  );
}
