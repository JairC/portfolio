import React from 'react';

export function ImagePlate({ height = 400, label, chip, src, style = {} }) {
  return (
    <div style={{ height, background: 'var(--surface-image)', position: 'relative', overflow: 'hidden', ...style }}>
      {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : null}
      {chip ? (
        <span style={{ position: 'absolute', left: 24, top: 24, display: 'inline-flex', padding: '9px 18px', background: 'var(--surface-card)', font: '400 var(--mono)/var(--mono-lh) var(--font-mono)', letterSpacing: 'var(--mono-tracking)', color: 'var(--text-primary)' }}>{chip}</span>
      ) : null}
      {label ? (
        <span style={{ position: 'absolute', left: 20, top: 16, font: '400 var(--mono-s)/var(--mono-s-lh) var(--font-mono)', color: 'var(--text-muted)' }}>{label}</span>
      ) : null}
    </div>
  );
}
