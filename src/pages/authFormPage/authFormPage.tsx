import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useInput } from '@/src/shared/hoc/useInput/useInput';


import AuthMainText from '@/src/entities/authMainText/authMainText';
import AuthSwitchElem from '@/src/entities/authSwitchElem/authSwitchElem'
import AuthForm from '@/src/entities/authForm/authForm';
import BlueAuthBtn from '@/src/shared/components/blueAuthBtn/blueAuthBtn';


type AuthInput = {
    isEmpty: boolean;
    minLengthError: boolean;
    emailError: boolean;
    inputValid: boolean;
    resetError: () => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    reset: () => void;
    isDirty: boolean;
}

const AuthFormPage = () => {

    const router = useRouter();

    const email:AuthInput =  useInput('',{ isEmpty:true , isEmail:true });
    const password:AuthInput = useInput('',{ isEmpty:true , minLength:5 });

    const [signUpBool ,setsignUpBoolBool] = useState(true);

    const handlerSwitchSing= () => {
        setsignUpBoolBool(!signUpBool);
    }

    const handlerSendAuth= () => {



        console.log(email)
        console.log(password)

    }


    return (
        <section className='relative h-[100vh]' >
      

            <div className="container mx-auto max-w-md  flex-col pt-[30vh]" >     
          

                <AuthMainText signUpBool={signUpBool} />

                <AuthForm email={email} password={password}/>

                <BlueAuthBtn isValidEmail = {email.inputValid} isValidPassword={password.inputValid} signUpBool={signUpBool} handlerSendAuth={handlerSendAuth}/>

                <AuthSwitchElem signUpBool={signUpBool} handlerSwitchSing={handlerSwitchSing} /> 
            

            </div>
        </section>

        
    )
}

export default AuthFormPage