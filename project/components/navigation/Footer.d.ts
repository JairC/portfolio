import * as React from 'react';

/**
 * Ink-black closing band with mono link columns.
 */
export interface FooterProps {
  density?: 'desktop' | 'mobile';
  columns?: { heading: string; items: string[] }[];
  copyright?: string;
  style?: React.CSSProperties;
}

export declare function Footer(props: FooterProps): React.ReactElement;
