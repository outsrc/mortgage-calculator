/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { MonthlyCostCalculator } from './MonthlyCostCalculator'
import { CalculatorFrame } from './CalculatorFrame'
import { TabSelector } from './TabSelector'

export default {
  title: 'Components/MonthlyCostCalculator',
  component: MonthlyCostCalculator
} as Meta

export const controlledInput: React.FC = () => <MonthlyCostCalculator />

export const insideFrame: React.FC = () => (
  <CalculatorFrame>
    <TabSelector
      tabs={[
        {
          label: 'Monthly Cost',
          content: <MonthlyCostCalculator />
        },
        { label: 'Maximum Loan', content: <div>Loan</div> }
      ]}
    />
  </CalculatorFrame>
)
