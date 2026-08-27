import * as React from 'react';

/**
 * Home hero: a 96px Fraunces statement, mono intro plus meta grid, then actions.
 * @startingPoint section="Sections" subtitle="96px statement hero with actions" viewport="1440x620"
 */
export interface HeroStatementProps {
  children?: React.ReactNode;
  intro?: React.ReactNode;
  meta?: [string, React.ReactNode, boolean?][];
  actions?: React.ReactNode;
  density?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}

export declare function HeroStatement(props: HeroStatementProps): React.ReactElement;
