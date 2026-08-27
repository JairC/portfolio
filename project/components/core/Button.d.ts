import * as React from 'react';

/**
 * Square mono-label action. Primary is solid ink, outline is a 1px inset hairline.
 * @startingPoint section="Core" subtitle="Primary and outline actions" viewport="700x150"
 */
export interface ButtonProps {
  variant?: 'primary' | 'outline' | 'quiet';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): React.ReactElement;
