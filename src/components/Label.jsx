import React from 'react'

const Label = ({labelName,className}) => {
  return (
    <label className={`${className} font-'dm' font-bold text-primaryColor text-base block`}>{labelName}</label>
  )
}

export default Label