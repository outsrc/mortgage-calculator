/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { MaximumLoanCalculator } from './MaximumLoanCalculator'
import { CalculatorFrame } from './CalculatorFrame'
import { TabSelector } from './TabSelector'

export default {
  title: 'Components/MaximumLoanCalculator',
  component: MaximumLoanCalculator
} as Meta

export const controlledInput: React.FC = () => <MaximumLoanCalculator />

export const insideFrame: React.FC = () => (
  <CalculatorFrame>
    <TabSelector
      tabs={[
        {
          label: 'Monthly Cost',
          content: <MaximumLoanCalculator />
        },
        { label: 'Maximum Loan', content: <div>Loan</div> }
      ]}
    />
  </CalculatorFrame>
)
