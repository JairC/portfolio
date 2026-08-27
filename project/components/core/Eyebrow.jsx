import React from 'react';

export function Eyebrow({ children, tone = 'meta', size = 'small', style = {} }) {
  const tones = { meta: 'var(--text-meta)', accent: 'var(--text-accent)', primary: 'var(--text-primary)' };
  const sizes = {
    small: { fontSize: 'var(--mono-xs)', lineHeight: 'var(--mono-xs-lh)', letterSpacing: 'var(--mono-tracking-widest)' },
    medium: { fontSize: 'var(--mono-s)', lineHeight: 'var(--mono-s-lh)', letterSpacing: 'var(--mono-tracking-wide)' },
    large: { fontSize: 'var(--mono)', lineHeight: 'var(--mono-lh)', letterSpacing: 'var(--mono-tracking)' },
  };
  return <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 400, color: tones[tone], ...sizes[size], ...style }}>{children}</span>;
}
