import * as React from 'react';
export interface MonthlyConstValue {
    mortgageAmount: number | null;
    interestRate: number | null;
    mortgagePeriod: number | null;
}
interface MonthlyCostInputProps {
    value: MonthlyConstValue;
    onChange: (value: MonthlyConstValue) => void;
}
export declare const MonthlyCostInput: React.FC<MonthlyCostInputProps>;
export {};
