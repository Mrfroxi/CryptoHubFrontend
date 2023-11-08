import AuthLabel from '@/src/entities/authLabel/authLabel'
import ErrorElem from '@/src/shared/errorElem/errorElem';
import MessageIcon from '@/src/shared/messageIconSvg/messageIcon'
import React from 'react'

const AuthEmailInput = ({elemType}:any) => {

  const {value ,onChange ,onBlur ,...errors} = elemType;

  return (
        
        <div className="mb-6 relative">
                
        <AuthLabel textLabel='Email'/>

        

        <ErrorElem 
          errors={errors}
          type='Email'
        />

        <div className='relative'>
        
                <MessageIcon />

                <input
                    type="email"
                    id="email"
                    value={value}
                    onChange={e => onChange(e)}
                    onBlur={e => onBlur(e)}
                    className="w-full pl-10 px-10 py-4 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                />
        </div>
        

    </div>
  )
}

export default AuthEmailInput