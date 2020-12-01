import * as React from 'react'
import { MaximumLoanValue, MaximumLoanInput } from './MaximumLoanInput'
import { ResultLine } from './ResultLine'
import mortgageHelpers from 'mortgage-helpers'

export const MaximumLoanCalculator: React.FC = () => {
  const [value, setValue] = React.useState<MaximumLoanValue>({
    monthlyPayments: 1418,
    interestRate: 3,
    mortgagePeriod: 30
  })

  const totalCostMortgage = React.useMemo(() => {
    if (
      value.mortgagePeriod === null ||
      value.interestRate === null ||
      value.monthlyPayments === null
    ) {
      return null
    }

    return Math.floor(value.monthlyPayments * value.mortgagePeriod * 12)
  }, [value])

  const maxLoan = React.useMemo(() => {
    if (
      value.mortgagePeriod === null ||
      value.interestRate === null ||
      value.monthlyPayments === null
    ) {
      return null
    }

    return Math.floor(
      mortgageHelpers.getMaximumBorrowingCapacity(
        value.monthlyPayments,
        value.interestRate,
        value.mortgagePeriod * 12,
        100
      ).loanAmount
    )
  }, [value])

  return (
    <div className='bg-gray-100 md:px-4 py-6'>
      <div>
        <MaximumLoanInput value={value} onChange={setValue} />
      </div>
      <div className='mt-10'>
        <ResultLine label='Total Cost of Mortgage' value={totalCostMortgage} />
        <ResultLine label='You could borrow' value={maxLoan} primary />
      </div>
    </div>
  )
}
