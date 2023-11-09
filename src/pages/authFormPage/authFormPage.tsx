import React, { useState } from 'react'
import AuthMainText from '@/src/entities/authMainText/authMainText';
import AuthSwitchElem from '@/src/entities/authSwitchElem/authSwitchElem'
import { useInput } from '@/src/shared/hoc/useInput/useInput';
import AuthForm from '@/src/entities/authForm/authForm';
import BlueAuthBtn from '@/src/shared/components/blueAuthBtn/blueAuthBtn';
import { useRouter } from 'next/navigation';
import MainLogo from '@/src/shared/svgs/mainLogo/mainLogo';

const AuthFormPage = () => {

    const router = useRouter();

    const email =  useInput('',{ isEmpty:true , isEmail:true });
    const password = useInput('',{ isEmpty:true , minLength:5 });

    const [signUpBool ,setsignUpBoolBool] = useState(true);

    const handlerSwitchSing= () => {
        setsignUpBoolBool(!signUpBool);
    }

    const handlerSendAuth= () => {

        router.push('/');

        email.reset();

        password.reset();

    }


    return (

        <div className="container mx-auto max-w-md pt-[30vh] flex-col" >     

            <MainLogo />

            <AuthMainText signUpBool={signUpBool} />

            <AuthForm email={email} password={password}/>

            <BlueAuthBtn signUpBool={signUpBool} handlerSendAuth={handlerSendAuth}/>

            <AuthSwitchElem signUpBool={signUpBool} handlerSwitchSing={handlerSwitchSing} />



        </div>
    )
}

export default AuthFormPage