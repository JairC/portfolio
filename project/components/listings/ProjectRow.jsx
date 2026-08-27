import React from 'react';
import { MetricStat } from '../core/MetricStat.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { PlaceholderSlot } from '../core/PlaceholderSlot.jsx';

export function ProjectRow({ index, category, title, description, stat, statLabel, pending = false, href = '#', onClick, style = {} }) {
  return (
    <a href={href} onClick={onClick} style={{ display: 'flex', gap: 56, alignItems: 'center', justifyContent: 'space-between', padding: '40px 0', textDecoration: 'none', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flexGrow: 1, minWidth: 0 }}>
        <Eyebrow size="medium">{category ? index + ' — ' + category : index}</Eyebrow>
        <span style={{ fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: 'var(--title)', lineHeight: 'var(--title-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)', overflowWrap: 'anywhere' }}>{title}</span>
        {pending
          ? <PlaceholderSlot size="chip">ONE-LINE DESCRIPTION — TBD</PlaceholderSlot>
          : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'var(--body)', lineHeight: 'var(--body-lh)', color: 'var(--text-muted)', maxWidth: 520, textWrap: 'pretty' }}>{description}</span>}
        <MetricStat value={stat} label={statLabel} pending={pending} size="large" style={{ paddingTop: 6 }} />
      </div>
      <div style={{ width: 360, height: 230, background: 'var(--surface-image)', flexShrink: 0 }} />
    </a>
  );
}
