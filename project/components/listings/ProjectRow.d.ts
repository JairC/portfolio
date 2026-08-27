import * as React from 'react';

/**
 * Secondary index entry: text left, 360x230 image right, rules above and below.
 * @startingPoint section="Listings" subtitle="Index row, image right" viewport="1280x310"
 */
export interface ProjectRowProps {
  index: string;
  category?: string;
  title: string;
  description?: string;
  stat?: React.ReactNode;
  statLabel?: string;
  pending?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export declare function ProjectRow(props: ProjectRowProps): React.ReactElement;
