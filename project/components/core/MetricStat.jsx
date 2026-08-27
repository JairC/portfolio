import React from 'react';

export function MetricStat({ value, label, size = 'large', layout = 'inline', pending = false, style = {} }) {
  const sizes = { xlarge: 'var(--stat-xl)', large: 'var(--stat-l)', medium: 'var(--stat-m)' };
  const valueStyle = pending
    ? { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: sizes[size], lineHeight: sizes[size], color: 'var(--text-meta)', border: '1px dashed var(--border-dashed)', padding: '0 10px', alignSelf: 'flex-start' }
    : { fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: sizes[size], lineHeight: sizes[size], letterSpacing: 'var(--stat-tracking)', color: 'var(--text-stat)' };
  const wrap = layout === 'inline'
    ? { display: 'flex', alignItems: 'baseline', gap: 16 }
    : { display: 'flex', flexDirection: 'column', gap: 5 };
  return (
    <div style={{ ...wrap, ...style }}>
      <span style={valueStyle}>{pending ? 'TBD' : value}</span>
      <span style={{ font: '400 var(--mono-xs)/var(--mono-xs-lh) var(--font-mono)', letterSpacing: 'var(--mono-tracking-wide)', color: 'var(--text-meta)' }}>{label}</span>
    </div>
  );
}
