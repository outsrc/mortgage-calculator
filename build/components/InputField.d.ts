import * as React from 'react';
export interface InputFieldProps {
    label: string;
    value: number | null;
    onChange: (value: number | null) => void;
    formatNumber: (value: number | null) => string;
}
export declare const InputField: React.FC<InputFieldProps>;
export declare const currencyFormatter: (value: number | null) => string;
export declare const percentageFormatter: (value: number | null) => string;
export declare const yearsFormatter: (value: number | null) => string;
