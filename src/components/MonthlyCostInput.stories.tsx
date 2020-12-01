/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/types-6-0'
import { MonthlyConstValue, MonthlyCostInput } from './MonthlyCostInput'

export default {
  title: 'Components/MonthlyCostInput',
  component: MonthlyCostInput
} as Meta

interface StatefulInputProps {
  initial: MonthlyConstValue
}

const StatefulInput: React.FC<StatefulInputProps> = ({ initial }) => {
  const [value, setValue] = React.useState<MonthlyConstValue>(initial)
  const handleChange = (value: MonthlyConstValue): void => {
    setValue(value)
    action('onChange')(value)
  }
  return <MonthlyCostInput value={value} onChange={handleChange} />
}

export const controlledInput: React.FC = () => (
  <StatefulInput initial={{ mortgagePeriod: 30, mortgageAmount: 400000, interestRate: 3.92 }} />
)
