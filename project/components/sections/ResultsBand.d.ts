import * as React from 'react';

/**
 * Centred single-stat band closing a case study.
 */
export interface ResultsBandProps {
  label?: string;
  value: React.ReactNode;
  caption?: React.ReactNode;
  density?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}

export declare function ResultsBand(props: ResultsBandProps): React.ReactElement;
