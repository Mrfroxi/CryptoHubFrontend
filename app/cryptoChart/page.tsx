import MainLogo from '@/src/shared/svgs/mainLogo/mainLogo'
import React from 'react'

const cryptoChartPage = () => {
  return (
    <main className='relative'>
        <header className ='fixed flex  item-center w-full py-6 border-b-2'>
            <div className='flex flex-row justify-between px-12 w-full'>
            <MainLogo />

            <div>
                avatar
            </div>
            </div>
        </header>

        

    </main>
  )
}

export default cryptoChartPage