import * as React from 'react';

/**
 * Dashed container marking copy or data the portfolio owner still has to supply.
 */
export interface PlaceholderSlotProps {
  size?: 'inline' | 'chip' | 'block';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PlaceholderSlot(props: PlaceholderSlotProps): React.ReactElement;
