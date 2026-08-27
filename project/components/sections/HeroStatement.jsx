import React from 'react';

export function HeroStatement({ children, intro, meta = [], actions, density = 'desktop', style = {} }) {
  const isMobile = density === 'mobile';
  return (
    <header style={{
      padding: isMobile ? '48px var(--page-x-mobile) 40px' : '120px var(--page-x) 96px',
      borderBottom: '1px solid var(--border-hairline)', ...style,
    }}>
      <h1 style={{ margin: 0, maxWidth: isMobile ? 'none' : 1180, fontFamily: 'var(--font-display)', fontOpticalSizing: 'auto', fontWeight: 300, fontSize: isMobile ? 'var(--display-s)' : 'var(--display-xl)', lineHeight: isMobile ? 'var(--display-s-lh)' : 'var(--display-xl-lh)', letterSpacing: 'var(--display-tracking)', color: 'var(--text-primary)', textWrap: 'balance' }}>{children}</h1>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 28 : 72, marginTop: isMobile ? 28 : 56, fontFamily: 'var(--font-mono)', fontWeight: 400, fontSize: 'var(--mono)', lineHeight: '20px', letterSpacing: 'var(--mono-tracking)', color: 'var(--text-muted)' }}>
        {intro ? <div style={{ maxWidth: isMobile ? 'none' : 440 }}>{intro}</div> : null}
        {meta.length ? (
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'auto 1fr' : 'auto auto', gap: '8px 20px', color: 'var(--text-meta)' }}>
            {meta.map((row) => (
              <React.Fragment key={row[0]}>
                <span>{row[0]}</span>
                <span style={row[2]
                  ? { color: 'var(--text-meta)', border: '1px dashed var(--border-dashed)', padding: '1px 6px', justifySelf: 'start' }
                  : { color: 'var(--text-primary)' }}>{row[2] ? 'TBD' : row[1]}</span>
              </React.Fragment>
            ))}
          </div>
        ) : null}
      </div>
      {actions ? (
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 12 : 16, alignItems: isMobile ? 'stretch' : 'center', marginTop: isMobile ? 32 : 48 }}>{actions}</div>
      ) : null}
    </header>
  );
}
