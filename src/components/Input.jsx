import React from 'react'

const Input = ({inType,inPh,className,inName,inValue}) => {
  return (
    <input className={`${className} font-'dm' text-listColor text-sm focus:outline-none border-b-2 border-borderColor w-full`} type={inType} placeholder={inPh} name={inName} value={inValue}></input>
  )
}

export default Input