import React from 'react';

export function Button({ children, variant = 'primary', href, onClick, style = {} }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '16px 32px',
    font: '400 var(--mono)/var(--mono-lh) var(--font-mono)',
    letterSpacing: 'var(--mono-tracking)',
    textDecoration: 'none', cursor: 'pointer',
    borderRadius: 'var(--radius)', border: 'none',
    transition: 'background 120ms linear, color 120ms linear',
  };
  const variants = {
    primary: { background: 'var(--button-fill)', color: 'var(--text-inverse)' },
    outline: { background: 'transparent', color: 'var(--text-primary)', boxShadow: 'inset 0 0 0 1px var(--border-button)' },
    quiet: { background: 'transparent', color: 'var(--text-muted)', padding: 0 },
  };
  const Tag = href ? 'a' : 'button';
  return <Tag href={href} onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>{children}</Tag>;
}
