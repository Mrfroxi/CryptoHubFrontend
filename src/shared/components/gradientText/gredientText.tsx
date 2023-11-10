import React from 'react'

const GradientText = ({text,size} : any) => {
  return (
    <span className={`bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text inline box-decoration-break-clone text-transparent text-${size} font-bold`}>
        {text}
    </span>
  )
}

export default GradientText