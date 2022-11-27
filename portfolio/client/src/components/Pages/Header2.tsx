import React from 'react'
import Niall_img from "../../assets/Img/Photo_Niall_BW_ecretée.png";
export const Header2 = () => {
  return (
    <div className='h-screen flex bg-beige justify-center items-center'>

    <div className='w-screen  md:px-24 sm:flex'>
      {/* TITLE */}
        <div className=' h-50 sm:bg-black p-4 justify-start sm:w-6/12'>
          <div className='sm:grid justify-start items-start py-9'>
            <h1 className='justify-self-start font-bold text-9xl'>Niall</h1>
            <h1 className='justify-self-start font-bold text-9xl'>Burdon</h1>
          </div>
          <div className="flexcontent-center sm:   py-9">
            <p className='flex w-11/12 md:text-left 2xl:w-6/12 '>A former marketer from Rennes, France, who pivoted his career into tech as a Front-End web developper. </p>
          </div>
         {/* BUTTON */}
        <div className='flex items-center justify-center w-1/4 bg-main_purple color text-light_purple'>
          <button className='p-3'>Hire me</button>
        </div>
      </div>
      {/* CIRCLES */}
        <div className='hidden -gum sm:flex relative inset-0 w-6/12 h-auto justify-center items-center'>
          <div className='flex w-3/6 h-3/6 bg-light_purple rounded-full justify-center items-center absolute left-12 shadow-slate-50'/>
          <div className='flex w-3/6 h-3/6 bg-main_purple rounded-full justify-center items-center absolute top-12'/>
          <div className='flex w-3/6 h-3/6 bg-light_purple rounded-full justify-center items-center absolute right-12'/>
          <img className='flex  h-3/6 z-10' src={Niall_img} alt="Niall" />
        </div>
      {/* IMG */}
        <div className='flex justify-center items-center'>
          <img className='sm:hidden flex w-48 h-48 z-10' src={Niall_img} alt="Niall" />
        </div>
    </div>
</div>
  )
}
