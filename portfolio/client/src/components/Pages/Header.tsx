import React from 'react'
import Niall_img from "../../assets/Img/Photo_Niall_BW_ecretée.png";
export const LandingPage = () => {
  return (
    <div className='h-screen flex bg-beige justify-center items-center'>

      <div className='flex flex-col w-screen md:px-24 lg:flex lg:flex-row'>
        {/* LEFT */}
          <div className='flex flex-col justify-center grow h-auto'>
            {/* TITLE */}
            <div className='flex justify-center'>
              <h1 className='flex font-extrabold italic text-center text-6xl md:text-9xl'>Niall</h1>
            </div>
            <div className='flex justify-center'>
              <h1 className='flex font-extrabold italic text-center text-6xl md:text-9xl'>BURDON</h1>
            </div>
            {/* DESCRIPTION */}
            <div className='flex justify-center'>
              <p className='flex py-6 xl:w-6/12 2xl:p-auto'>A former marketer from Rennes, France, who pivoted his career into tech as a Front-End web developper.</p>
            </div>
          {/* BUTTON */}
            <div className='flex items-center justify-center '>
              <button className='p-3 w-1/4 bg-main_purple color text-light_purple rounded-lg'>Hire me</button>
              <form action="mailto:email@gmail.com"method="post">
              </form>
            </div>
            {/* IMG */}
            <div className='xl:hidden flex justify-center items-center'>
              <img className='xl:hidden flex my-6 shrink-0 w-48 h-48 z-10' src={Niall_img} alt="Niall" />
            </div>
        </div>

      {/* RIGHT */}
        <div className='hidden mt-6 xl:flex relative inset-0 w-6/12 h-auto justify-center items-center'>
        <div className='flex w-2/4 h-2/4 xl:shrink-0 bg-light_purple rounded-full justify-center items-center absolute left-12 shadow-lg '/>
          <div className='flex w-2/4 h-2/4 xl:shrink-0 bg-main_purple rounded-full justify-center items-center absolute top-12 shadow-lg '/>
          <div className='flex w-2/4 h-2/4 xl:shrink-0 bg-light_purple rounded-full justify-center items-center absolute right-12 shadow-lg '/>
          <img className='flex h-3/6 z-10 ' src={Niall_img} alt="Niall" />
        </div>
    </div>
</div>
  )
}
