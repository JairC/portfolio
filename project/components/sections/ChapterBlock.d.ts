import * as React from 'react';

/**
 * Case-study chapter: inline number and label rail at left, heading and body at right.
 */
export interface ChapterBlockProps {
  number: string;
  label: string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  active?: boolean;
  density?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}

export declare function ChapterBlock(props: ChapterBlockProps): React.ReactElement;
