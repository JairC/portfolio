import * as React from 'react';

/**
 * The lead project: full-width plate on top, then eyebrow, title, description and stat below it.
 * @startingPoint section="Listings" subtitle="Lead project with plate and stat" viewport="1280x760"
 */
export interface FeaturedProjectProps {
  eyebrow?: string;
  category?: string;
  title: string;
  description?: string;
  stat?: React.ReactNode;
  statLabel?: string;
  statPending?: boolean;
  imageHeight?: number;
  density?: 'desktop' | 'mobile';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function FeaturedProject(props: FeaturedProjectProps): React.ReactElement;
