import React from 'react'

const AuthLabel = ({textLabel}:any) => {
  return (
    <>
      <label htmlFor={textLabel} className="block mb-2 text-base font-medium text-authgray ">
            {textLabel}
      </label>
    </>
        
  )
}

export default AuthLabel