import * as React from 'react'
import { MonthlyConstValue, MonthlyCostInput } from './MonthlyCostInput'
import { ResultLine } from './ResultLine'
import mortgageHelpers from 'mortgage-helpers'

export const MonthlyCostCalculator: React.FC = () => {
  const [value, setValue] = React.useState<MonthlyConstValue>({
    mortgageAmount: 400000,
    mortgagePeriod: 30,
    interestRate: 3
  })

  const monthlyPayments = React.useMemo(() => {
    if (
      value.interestRate === null ||
      value.mortgageAmount === null ||
      value.mortgagePeriod === null
    ) {
      return null
    }

    return Math.floor(
      mortgageHelpers.getMonthlyPayments(
        value.mortgageAmount,
        value.interestRate,
        value.mortgagePeriod * 12
      )
    )
  }, [value])

  const totalCostMortgage = React.useMemo(() => {
    if (
      value.interestRate === null ||
      value.mortgageAmount === null ||
      value.mortgagePeriod === null ||
      monthlyPayments === null
    ) {
      return null
    }

    return Math.floor(monthlyPayments * value.mortgagePeriod * 12)
  }, [value, monthlyPayments])

  return (
    <div className='bg-gray-100 md:px-4 py-6'>
      <div>
        <MonthlyCostInput value={value} onChange={setValue} />
      </div>
      <div className='mt-10'>
        <ResultLine label='Total Cost of Mortgage' value={totalCostMortgage} />
        <ResultLine label='Monthly Payments' value={monthlyPayments} primary />
      </div>
    </div>
  )
}
