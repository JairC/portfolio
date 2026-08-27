import * as React from 'react';

/**
 * Uppercase mono label above titles, on listing rows and chapter markers.
 */
export interface EyebrowProps {
  tone?: 'meta' | 'accent' | 'primary';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Eyebrow(props: EyebrowProps): React.ReactElement;
