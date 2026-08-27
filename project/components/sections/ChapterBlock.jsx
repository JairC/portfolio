import React from 'react';
import { PlaceholderSlot } from '../core/PlaceholderSlot.jsx';

export function ChapterBlock({ number, label, heading, body, active = false, density = 'desktop', style = {} }) {
  const isMobile = density === 'mobile';
  if (isMobile) {
    return (
      <section style={{ padding: '0 var(--page-x-mobile)', ...style }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-s)', lineHeight: 'var(--mono-s-lh)', color: 'var(--text-accent)', marginBottom: 14 }}>{number} — {label}</div>
        <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--subtitle)', lineHeight: 'var(--subtitle-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)' }}>{heading}</h2>
        {body
          ? <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--body-s)', lineHeight: 'var(--body-s-lh)', color: 'var(--text-muted)' }}>{body}</p>
          : <PlaceholderSlot style={{ padding: 18 }}>BODY COPY PLACEHOLDER</PlaceholderSlot>}
      </section>
    );
  }
  return (
    <section style={{ display: 'flex', gap: 'var(--chapter-gap)', padding: '32px var(--page-x)', alignItems: 'flex-start', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 'var(--chapter-rail)', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 12, lineHeight: '100%', color: active ? 'var(--text-accent)' : 'var(--border-dashed)' }}>{number}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--mono-s)', lineHeight: 'var(--mono-s-lh)', letterSpacing: '0.01em', color: 'var(--text-meta)' }}>{label}</span>
      </div>
      <div style={{ flexGrow: 1, maxWidth: 'var(--content-max)' }}>
        <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: 'var(--heading)', lineHeight: 'var(--heading-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)' }}>{heading}</h2>
        {body
          ? <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--body)', lineHeight: 'var(--body-lh)', color: 'var(--text-muted)' }}>{body}</p>
          : <PlaceholderSlot>BODY COPY PLACEHOLDER — 40 to 60 words.</PlaceholderSlot>}
      </div>
    </section>
  );
}
