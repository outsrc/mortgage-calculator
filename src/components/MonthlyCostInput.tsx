import * as React from 'react'
import { currencyFormatter, InputField, percentageFormatter, yearsFormatter } from './InputField'

export interface MonthlyConstValue {
  mortgageAmount: number | null
  interestRate: number | null
  mortgagePeriod: number | null
}

interface MonthlyCostInputProps {
  value: MonthlyConstValue
  onChange: (value: MonthlyConstValue) => void
}

export const MonthlyCostInput: React.FC<MonthlyCostInputProps> = ({ value, onChange }) => {
  const handleInterestRateChange = (newValue: number | null): void => {
    onChange({ ...value, interestRate: newValue })
  }
  const handleMortgageAmountChange = (newValue: number | null): void => {
    onChange({ ...value, mortgageAmount: newValue })
  }
  const handleMortgagePeriodChange = (newValue: number | null): void => {
    onChange({ ...value, mortgagePeriod: newValue })
  }

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col w-full md:w-4/12 md:mr-3 mb-3 md:mb-0 justify-end'>
        <InputField
          label='Mortgage Amount'
          value={value.mortgageAmount}
          onChange={handleMortgageAmountChange}
          formatNumber={currencyFormatter}
        />
      </div>
      <div className='flex flex-col w-full md:w-4/12 md:mr-3 mb-3 md:mb-0 justify-end'>
        <InputField
          label='Interest Rate'
          value={value.interestRate}
          onChange={handleInterestRateChange}
          formatNumber={percentageFormatter}
        />
      </div>
      <div className='flex flex-col w-full md:w-4/12 mb-3 md:mb-0 justify-end'>
        <InputField
          label='Mortgage Period'
          value={value.mortgagePeriod}
          onChange={handleMortgagePeriodChange}
          formatNumber={yearsFormatter}
        />
      </div>
    </div>
  )
}
