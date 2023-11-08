import React from 'react'
import EyeSvgCrossSvg from '@/src/shared/eyeCrossSvg/eyeCrossSvg'
import EyeSvg from '@/src/shared/eyeSvg/eyeSvg'

const EyesElemSvg = ({handleChangeEyeBool,eyeBool}:any) => {
  return (
    <span onClick={handleChangeEyeBool} className="absolute inset-y-0 pt-0 right-5 pl-3 flex items-center cursor-pointer">
        {
            eyeBool ?
            <EyeSvg/>:
            <EyeSvgCrossSvg/>

        }
    </span>
  )
}

export default EyesElemSvg