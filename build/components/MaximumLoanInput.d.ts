import * as React from 'react';
export interface MaximumLoanValue {
    monthlyPayments: number | null;
    interestRate: number | null;
    mortgagePeriod: number | null;
}
interface MaximumLoanInputProps {
    value: MaximumLoanValue;
    onChange: (value: MaximumLoanValue) => void;
}
export declare const MaximumLoanInput: React.FC<MaximumLoanInputProps>;
export {};
