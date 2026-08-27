import * as React from 'react';

/**
 * Flat grey image well holding real imagery or a mono placeholder label.
 */
export interface ImagePlateProps {
  height?: number | string;
  label?: string;
  chip?: React.ReactNode;
  src?: string;
  style?: React.CSSProperties;
}

export declare function ImagePlate(props: ImagePlateProps): React.ReactElement;
