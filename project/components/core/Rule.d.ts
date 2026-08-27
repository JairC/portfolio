import * as React from 'react';

/**
 * One-pixel divider, the only separator in the system.
 */
export interface RuleProps {
  tone?: 'hairline' | 'strong';
  style?: React.CSSProperties;
}

export declare function Rule(props: RuleProps): React.ReactElement;
