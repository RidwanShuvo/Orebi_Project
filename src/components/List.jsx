import React from 'react'

const List = ({text,className,href}) => {
  return (
        <li><a className={`text-sm font-normal font-'dm' text-listColor hover:text-primaryColor ${className}`} href={href}>{text}</a></li>
  )
}

export default List