import React from 'react'
import Niall_img from "../../assets/Img/JS.png";

export const TechSkills = () => {
    return (
  <div className='container mx-auto px-4 h-2/3 '>
    <div className='font-extrabold italic text-9xl'>Tech Skills</div>

    <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 bg-beige">
        <div className="font-bold text-xl mb-2">Javascript</div>
        <img className="w-10 h-10 rounded-full mr-4" src={Niall_img} alt="Javascript"/>
      </div>
      <div className="px-6 pt-4 pb-2">

      </div>
    </div>
  </div>
  )
}
      