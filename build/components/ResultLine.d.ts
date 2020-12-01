import * as React from 'react';
export interface ResultLineProps {
    label: string;
    value: number | null;
    primary?: boolean;
}
export declare const ResultLine: React.FC<ResultLineProps>;
