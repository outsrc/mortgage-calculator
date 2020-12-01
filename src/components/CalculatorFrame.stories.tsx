/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { CalculatorFrame } from './CalculatorFrame'

export default {
  title: 'Components/CalculatorFrame',
  component: CalculatorFrame
} as Meta

export const EmptyFrame: React.FC<{}> = () => <CalculatorFrame>content</CalculatorFrame>
