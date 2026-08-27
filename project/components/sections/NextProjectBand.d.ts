import * as React from 'react';

/**
 * Large forward link to the next case study, with a 480x280 plate on desktop.
 */
export interface NextProjectBandProps {
  label?: string;
  title: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  density?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}

export declare function NextProjectBand(props: NextProjectBandProps): React.ReactElement;
