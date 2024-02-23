import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-container mx-auto ${className}`}>{children}</div>
  )
}

export default Container