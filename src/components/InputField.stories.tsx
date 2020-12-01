/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/types-6-0'
import { currencyFormatter, InputField, percentageFormatter, yearsFormatter } from './InputField'

export default {
  title: 'Components/InputField',
  component: InputField
} as Meta

interface StatefulInputProps {
  label: string
  initial: number
  formatNumber: (value: number | null) => string
}

const StatefulInput: React.FC<StatefulInputProps> = ({ initial, label, formatNumber }) => {
  const [value, setValue] = React.useState<number | null>(initial)
  const handleChange = (value: number | null): void => {
    setValue(value)
    action('onChange')(value)
  }
  return (
    <InputField formatNumber={formatNumber} label={label} value={value} onChange={handleChange} />
  )
}

export const moneyInput: React.FC = () => (
  <StatefulInput label='Mortgage Amount' initial={300000} formatNumber={currencyFormatter} />
)

export const percentInput: React.FC = () => (
  <StatefulInput label='Interest Rate' initial={3.92} formatNumber={percentageFormatter} />
)

export const yearsInput: React.FC = () => (
  <StatefulInput label='Mortgage Period' initial={30} formatNumber={yearsFormatter} />
)
