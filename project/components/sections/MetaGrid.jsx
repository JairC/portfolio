import React from 'react';

export function MetaGrid({ items = [], columns = 2, style = {} }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', 1fr)', gap: '18px 16px', fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: 'var(--mono-s)', lineHeight: 'var(--mono-lh)', paddingTop: 22, borderTop: '1px solid var(--border-hairline)', ...style }}>
      {items.map((row) => (
        <div key={row[0]}>
          <div style={{ color: 'var(--text-meta)', marginBottom: 5 }}>{row[0]}</div>
          <div style={row[2]
            ? { color: 'var(--text-meta)', border: '1px dashed var(--border-dashed)', padding: '2px 6px', display: 'inline-block' }
            : { color: 'var(--text-primary)' }}>{row[2] ? 'TBD' : row[1]}</div>
        </div>
      ))}
    </div>
  );
}
