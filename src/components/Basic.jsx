import React from 'react'

const Basic = ({text, className}) => {
  return (
    <div className={`${className} text-xl font-bold font-'dm' text-primaryColor`}>{text}</div>
  )
}

export default Basic