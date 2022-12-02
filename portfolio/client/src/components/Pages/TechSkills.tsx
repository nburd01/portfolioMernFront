import React from 'react'
import JS from "../../assets/Img/JS.png";
import ReactPng from "../../assets/Img/react.png";
import TypeScript from "../../assets/Img/typescript-logo.svg";
import nodejs from "../../assets/Img/nodejs.png";

export const TechSkills = () => {
    return (
  <section className='container mx-auto px-4 h-2/3 ' id='TechSkills'>
    <div className='font-extrabold italic text-6xl md:text-9xl'>Tech Skills</div>
    <div className='inline-bock sm:grid grid-cols-2 grid-flow-row gap-4'>

        <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-beige">
            <div className="font-bold text-xl mb-2">Javascript</div>
            <img className="w-10 h-10 rounded-full mr-4 object-scale-down" src={JS} alt="Javascript"/>
          </div>
          <div className="px-6 pt-4 pb-2">
          </div>
        </div>
        
        <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-beige">
            <div className="font-bold text-xl mb-2">React.js</div>
            <img className="w-10 h-10 rounded-full mr-4 object-scale-down" src={ReactPng} alt="React"/>
          </div>
          <div className="px-6 pt-4 pb-2">
          </div>
        </div>

        <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-beige">
            <div className="font-bold text-xl mb-2">TypeScript</div>
            <img className="w-10 h-10 rounded-full mr-4 object-scale-down" src={TypeScript} alt="TypeScript"/>
          </div>
          <div className="px-6 pt-4 pb-2">
          </div>
        </div>

        <div className="max-w-sm m-10 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4 bg-beige">
            <div className="font-bold text-xl mb-2">Node.js</div>
            <img className="w-10 h-10 rounded-full mr-4 object-scale-down"  src={nodejs} alt="node.js"/>
          </div>
          <div className="px-6 pt-4 pb-2">
          </div>
        </div>
    </div>

  </section>
  )
}
      