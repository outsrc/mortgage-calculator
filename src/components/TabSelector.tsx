import * as React from 'react'
import classnames from 'classnames'

export interface Tab {
  label: string
  content: JSX.Element
}

interface TabSelectorProps {
  tabs: Tab[]
}

export const TabSelector: React.FC<TabSelectorProps> = ({ tabs }) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0)
  const createHandleClick = (index: number) => () => {
    setSelectedTabIndex(index)
  }

  return (
    <div>
      <div className='flex flex-row'>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={classnames(
              'outline-none font-medium focus:outline-none flex flex-grow flex-shrink-0 justify-center py-3 hover:bg-blue-100',
              { 'text-blue-400': index === selectedTabIndex }
            )}
            onClick={createHandleClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <hr />
      <div>{tabs[selectedTabIndex].content}</div>
    </div>
  )
}
