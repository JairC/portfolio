import React from 'react';

export function CategoryChip({ children, tone = 'paper', style = {} }) {
  const tones = {
    paper: { background: 'var(--surface-card)', color: 'var(--text-primary)' },
    tint: { background: 'var(--surface-tint)', color: 'var(--verdigris)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
      font: '400 var(--mono)/var(--mono-lh) var(--font-mono)',
      letterSpacing: 'var(--mono-tracking)',
      ...tones[tone], ...style,
    }}>{children}</span>
  );
}
