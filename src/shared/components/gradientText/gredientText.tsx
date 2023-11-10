import React from 'react'

const GradientText = ({text,size} : any) => {
  return (
    <span className={`font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text inline box-decoration-break-clone text-transparent text-${size}`}>
        {text}
    </span>
  )
}

export default GradientText