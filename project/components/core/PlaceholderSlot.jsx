import React from 'react';

export function PlaceholderSlot({ children, size = 'block', style = {} }) {
  const sizes = {
    inline: { padding: '2px 6px', display: 'inline-block' },
    chip: { padding: '7px 10px', alignSelf: 'flex-start' },
    block: { padding: 24 },
  };
  return (
    <div style={{
      border: '1px dashed var(--border-dashed)',
      font: '400 var(--mono)/var(--mono-lh) var(--font-mono)',
      color: 'var(--text-meta)',
      ...sizes[size], ...style,
    }}>{children}</div>
  );
}
