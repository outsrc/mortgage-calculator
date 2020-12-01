import * as React from 'react'

export const CalculatorFrame: React.FC = ({ children }) => {
  return (
    <div className='bg-gray-100 border-gray-200 rounded px-4 py-2'>
      <h1 className='text-xl text-gray-800 mb-4'>Mortgage Calculator</h1>
      <div>{children}</div>
    </div>
  )
}
