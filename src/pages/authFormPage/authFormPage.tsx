import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useInput } from '@/src/shared/hoc/useInput/useInput';


import AuthMainText from '@/src/entities/authMainText/authMainText';
import AuthSwitchElem from '@/src/entities/authSwitchElem/authSwitchElem'
import AuthForm from '@/src/entities/authForm/authForm';
import BlueAuthBtn from '@/src/shared/components/blueAuthBtn/blueAuthBtn';
import MainLogoBlack from '@/src/shared/svgs/mainLogo/mainLogoBlack';
import Image from 'next/image';
import Link from 'next/link';
import GradientText from '@/src/shared/components/gradientText/gredientText';

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
        <section className='relative h-[100vh]' >
      

            <div className='fixed left-0 top-0 flex flex-row  justify-between w-full pt-4 px-10'>
                <MainLogoBlack/>

                <div className='mr-4 flex flex-row cursor-pointer transition duration-300 transform hover:scale-110 hover:bg-black w-32 h-9 rounded-3xl'>
                    <Link href={'/'} className='flex flex-row item-center justify-center mx-auto items-center text-'>
                        <p className='singUnText text-lg font-bold'>
                            <GradientText text='Main' size='2xl'/>
                        </p>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-md  flex-col pt-[30vh]" >     
          

                <AuthMainText signUpBool={signUpBool} />

                <AuthForm email={email} password={password}/>

                <BlueAuthBtn signUpBool={signUpBool} handlerSendAuth={handlerSendAuth}/>

                <AuthSwitchElem signUpBool={signUpBool} handlerSwitchSing={handlerSwitchSing} /> 
            

            </div>
        </section>

        
    )
}

export default AuthFormPage