import React from 'react';
import { ImagePlate } from '../core/ImagePlate.jsx';
import { MetricStat } from '../core/MetricStat.jsx';
import { Eyebrow } from '../core/Eyebrow.jsx';

export function FeaturedProject({ eyebrow = 'FEATURED — 01', category, title, description, stat, statLabel, statPending = false, imageHeight, density = 'desktop', href = '#', onClick, style = {} }) {
  const isMobile = density === 'mobile';
  return (
    <a href={href} onClick={onClick} style={{ display: 'block', textDecoration: 'none', ...style }}>
      <ImagePlate height={imageHeight || (isMobile ? 220 : 440)} chip={category} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 16, paddingTop: isMobile ? 22 : 32 }}>
        <Eyebrow tone="accent" size={isMobile ? 'small' : 'medium'}>{eyebrow}</Eyebrow>
        <span style={{ fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: isMobile ? 'var(--title-s)' : 'var(--display-m)', lineHeight: isMobile ? 'var(--title-s-lh)' : 'var(--display-m-lh)', letterSpacing: 'var(--display-tracking-tight)', color: 'var(--text-primary)' }}>{title}</span>
        {description ? (
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: isMobile ? 'var(--body-s)' : 'var(--lede)', lineHeight: isMobile ? 'var(--body-s-lh)' : 'var(--lede-lh)', color: 'var(--text-muted)', textWrap: 'pretty' }}>{description}</span>
        ) : null}
        <MetricStat value={stat} label={statLabel} pending={statPending} size={isMobile ? 'large' : 'xlarge'} layout={isMobile ? 'stacked' : 'inline'} style={{ paddingTop: 8 }} />
      </div>
    </a>
  );
}
