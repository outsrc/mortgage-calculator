/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/types-6-0'
import { MaximumLoanValue, MaximumLoanInput } from './MaximumLoanInput'

export default {
  title: 'Components/MaximumLoanInput',
  component: MaximumLoanInput
} as Meta

interface StatefulInputProps {
  initial: MaximumLoanValue
}

const StatefulInput: React.FC<StatefulInputProps> = ({ initial }) => {
  const [value, setValue] = React.useState<MaximumLoanValue>(initial)
  const handleChange = (value: MaximumLoanValue): void => {
    setValue(value)
    action('onChange')(value)
  }
  return <MaximumLoanInput value={value} onChange={handleChange} />
}

export const controlledInput: React.FC = () => (
  <StatefulInput initial={{ mortgagePeriod: 30, monthlyPayments: 2600, interestRate: 3.92 }} />
)
