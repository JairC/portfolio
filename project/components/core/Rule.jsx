import React from 'react';

export function Rule({ tone = 'hairline', style = {} }) {
  return <div style={{ height: 1, background: tone === 'strong' ? 'var(--border-dashed)' : 'var(--border-hairline)', ...style }} />;
}
