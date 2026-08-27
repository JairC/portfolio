import * as React from 'react';

/**
 * Rectangular mono chip labelling a project category, usually inset on an image plate.
 */
export interface CategoryChipProps {
  tone?: 'paper' | 'tint';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function CategoryChip(props: CategoryChipProps): React.ReactElement;
