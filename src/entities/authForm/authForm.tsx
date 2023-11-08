'use client'
import React,{useState} from 'react'
import AuthPasswordInput from '@/src/features/authPasswordInput/authPasswordInput';
import AuthEmailInput from '@/src/features/authEmailInput/authEmailInput';

const AuthForm = ({email,password}:any) => {

    const [eyeBool,seteyeBool] = useState(true);

    const handleChangeEyeBool = () => {
        seteyeBool(!eyeBool);
    }

    return (
    
            <form className="pt-6 pb-3 bg-white ">

            
                <AuthPasswordInput handleChangeEyeBool={handleChangeEyeBool} eyeBool={eyeBool}  elemType={password}/>

                <AuthEmailInput elemType={email}/>
        
            
            </form>
    )
}

export default AuthForm