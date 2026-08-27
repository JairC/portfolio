import React from 'react';
import { Button } from '../core/Button.jsx';

export function ContactBand({ heading = 'Let us work together', cta = 'GET IN TOUCH →', href = '#', density = 'desktop', withRule = true, style = {} }) {
  const isMobile = density === 'mobile';
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', gap: isMobile ? 16 : 20, alignItems: 'center',
      padding: isMobile ? '56px var(--page-x-mobile)' : '100px var(--page-x)',
      borderTop: withRule ? '1px solid var(--border-hairline)' : 'none',
      ...style,
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: isMobile ? 'var(--title-s)' : 'var(--display-l)', lineHeight: isMobile ? '36px' : 'var(--display-l-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)' }}>{heading}</span>
      <Button variant="outline" href={href}>{cta}</Button>
    </section>
  );
}
