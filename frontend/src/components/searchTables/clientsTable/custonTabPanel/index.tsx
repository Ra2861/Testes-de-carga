import React from 'react'

interface CustomTabPanelProps {
  children: React.ReactNode
  value: number
  index: number
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export default CustomTabPanel
