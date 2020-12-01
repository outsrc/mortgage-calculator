import * as React from 'react'
import { currencyFormatter } from './InputField'
import classnames from 'classnames'

export interface ResultLineProps {
  label: string
  value: number | null
  primary?: boolean
}

export const ResultLine: React.FC<ResultLineProps> = ({ label, value, primary }) => {
  return (
    <div className='flex flex-col md:flex-row mb-4 md:mb-0'>
      <div
        className={classnames('flex flex-col w-6/12 justify-center text-sm text-gray-600', {
          'text-lg text-gray-800': primary
        })}
      >
        {label}
      </div>
      <div
        className={classnames('w-6/12 md:text-right text-sm text-gray-600', {
          'text-2xl text-gray-800 font-semibold': primary
        })}
      >
        {value !== null ? currencyFormatter(value) : '-'}
      </div>
    </div>
  )
}
