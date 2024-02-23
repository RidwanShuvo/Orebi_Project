import React from 'react'

    const BadgeNew = ({text, className}) => {
        return (
              <div className={`${className} px-8 py-2.5 w-24 bg-primaryColor text-white text-sm font-bold font-'dm'`}>{text}</div>
        )
      }

export default BadgeNew