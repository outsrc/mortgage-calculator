/* eslint-disable @typescript-eslint/consistent-type-assertions */
import * as React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { ResultLine } from './ResultLine'

export default {
  title: 'Components/ResultLine',
  component: ResultLine
} as Meta

export const oneLine: React.FC = () => (
  <div>
    <ResultLine label='Total Cost of Mortgage' value={510640} />
  </div>
)

export const twoLines: React.FC = () => (
  <div>
    <ResultLine label='Total Cost of Mortgage' value={510640} />
    <ResultLine label='Monthly Payments' value={1418} primary />
  </div>
)

export const noValue: React.FC = () => (
  <div>
    <ResultLine label='Total Cost of Mortgage' value={null} />
  </div>
)
