import * as React from 'react';

/**
 * The loudest element in any listing: a Fraunces number in verdigris with a small mono caption.
 * @startingPoint section="Core" subtitle="Verdigris stat with mono caption" viewport="700x150"
 */
export interface MetricStatProps {
  value?: React.ReactNode;
  label: string;
  size?: 'xlarge' | 'large' | 'medium';
  layout?: 'inline' | 'stacked';
  pending?: boolean;
  style?: React.CSSProperties;
}

export declare function MetricStat(props: MetricStatProps): React.ReactElement;
