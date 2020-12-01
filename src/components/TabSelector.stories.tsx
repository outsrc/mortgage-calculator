/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { CalculatorFrame } from './CalculatorFrame'
import { TabSelector } from './TabSelector'
import { MonthlyCostCalculator } from './MonthlyCostCalculator'
import { MaximumLoanCalculator } from './MaximumLoanCalculator'

export default {
  title: 'Components/TabSelector',
  component: TabSelector
} as Meta

export const withTabSelector: React.FC = () => (
  <div className='w-full md:w-6/12 mx-auto my-10'>
    <CalculatorFrame>
      <TabSelector
        tabs={[
          { label: 'Monthly Cost', content: <MonthlyCostCalculator /> },
          { label: 'Maximum Loan', content: <MaximumLoanCalculator /> }
        ]}
      />
    </CalculatorFrame>
  </div>
)
