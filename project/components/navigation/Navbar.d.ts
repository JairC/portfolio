import * as React from 'react';

/**
 * Top bar: bold mono wordmark left, mono links right, hairline below.
 * @startingPoint section="Navigation" subtitle="Wordmark and mono links" viewport="1440x82"
 */
export interface NavbarProps {
  wordmark?: string;
  links?: string[];
  activeLink?: string;
  density?: 'desktop' | 'mobile';
  onNavigate?: (link: string) => void;
  style?: React.CSSProperties;
}

export declare function Navbar(props: NavbarProps): React.ReactElement;
