import * as React from 'react';

/**
 * Closing call to action above the footer, present on every page.
 */
export interface ContactBandProps {
  heading?: string;
  cta?: string;
  href?: string;
  density?: 'desktop' | 'mobile';
  withRule?: boolean;
  style?: React.CSSProperties;
}

export declare function ContactBand(props: ContactBandProps): React.ReactElement;
