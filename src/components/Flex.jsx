import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex