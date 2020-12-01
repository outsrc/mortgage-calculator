import './styles/index.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { CalculatorFrame } from './components/CalculatorFrame'
import { TabSelector } from './components/TabSelector'
import { MonthlyCostCalculator } from './components/MonthlyCostCalculator'
import { MaximumLoanCalculator } from './components/MaximumLoanCalculator'

export const renderMortgageCalculator = (element: Element): void => {
  if (element !== null) {
    ReactDOM.render(
      <CalculatorFrame>
        <TabSelector
          tabs={[
            { label: 'Monthly Cost', content: <MonthlyCostCalculator /> },
            { label: 'Maximum Loan', content: <MaximumLoanCalculator /> }
          ]}
        />
      </CalculatorFrame>,
      element
    )
  }
}
