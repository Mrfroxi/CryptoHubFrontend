import AuthLabel from '@/src/entities/authLabel/authLabel'
import EyesElemSvg from '@/src/entities/eyesElemSvg/eyesElemSvg'
import ErrorElem from '@/src/shared/components/errorElem/errorElem';
import React from 'react'

const AuthPasswordInput = ({handleChangeEyeBool,eyeBool, elemType}:any) => {

    const {value ,onChange ,onBlur ,...errors} = elemType;

    return (
                
                <div className="mb-6 relative">

                <AuthLabel textLabel='Password'/> 
                    
                    <ErrorElem 
                        errors={errors}
                        type='Password'
                    />
            
                <div className='relative'>

                  {
                     eyeBool?
                        <input
                            type="text"
                            id="password"
                            value={value}
                            onChange={e => onChange(e)}
                            onBlur={e => onBlur(e)}
                            className="w-full px-3 py-4 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />:
                        <input
                            type="password"
                            id="password"
                            value={value}
                            onChange={e => onChange(e)}
                            onBlur={e => onBlur(e)}
                            className="w-full px-3 py-4 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                  }

                    <EyesElemSvg handleChangeEyeBool={handleChangeEyeBool} eyeBool={eyeBool} />
                </div>
            

            </div>
    )
}

export default AuthPasswordInput