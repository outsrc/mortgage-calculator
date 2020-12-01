import * as React from 'react'

export interface InputFieldProps {
  label: string
  value: number | null
  onChange: (value: number | null) => void
  formatNumber: (value: number | null) => string
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, formatNumber }) => {
  const [textValue, setTextValue] = React.useState(formatNumber(value))

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    const v = ev.target.value.replace(/[^0-9.]/gi, '')
    setTextValue(v)

    if (v.length === 0) {
      onChange(null)
    } else {
      if (v[v.length - 1] !== '.') {
        onChange(parseFloat(v))
      }
    }
  }

  const handleFocus = (): void => {
    setTextValue(value?.toString() ?? '')
  }

  const handleBlur = (): void => {
    setTextValue(formatNumber(value))
  }

  return (
    <div className='flex flex-col justify-between'>
      <div className='text-sm w-full text-gray-700 font-normal mb-1'>{label}</div>
      <div className='w-full'>
        <input
          value={textValue}
          onChange={handleChange}
          className='w-full border border-gray-200 rounded-md px-3 py-2 bg-gray-50 outline-none focus:outline-none focus:border-blue-200'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export const currencyFormatter = (value: number | null): string => {
  if (value === null) {
    return ''
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value)
}

export const percentageFormatter = (value: number | null): string => {
  if (value === null) {
    return ''
  }

  return `${value.toString()} %`
}

export const yearsFormatter = (value: number | null): string => {
  if (value === null) {
    return ''
  }

  return `${Math.abs(value).toString()} years`
}
