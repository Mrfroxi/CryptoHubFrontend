import MainHeader from '@/src/features/mainHeader/mainHeader'
import NavBar from '@/src/features/navBar/navBar'
import StarsCanvas from '@/src/features/starBackground/starBackgrround'
import React from 'react'

const MainPage = () => {
  return (

    <main className='mainBackGround h-[100vh]'>
        <MainHeader />

        <StarsCanvas />
    </main>
  
  )
}

export default MainPage