import * as React from 'react';

/**
 * Mono key/value grid for role, duration, team and scope.
 */
export interface MetaGridProps {
  items?: [string, React.ReactNode, boolean?][];
  columns?: number;
  style?: React.CSSProperties;
}

export declare function MetaGrid(props: MetaGridProps): React.ReactElement;
