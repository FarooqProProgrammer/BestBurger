import React from 'react'
import "./Hero.css"

export default function Hero() {
  return (
    <div className='flex-[5] border-2 border-white flex justify-center items-start px-10  flex-col py-5'>
        <h2 className='text-white text-8xl font-bold'>Get CashBack</h2> 
        <h2 className="text-white text-6xl font-bold">up to 50% off</h2>
        <p className='w-[500px] text-xl text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto nesciunt minus similique iste voluptas dolorum soluta suscipit quidem vel.</p>
        <button className='py-2 pl-3 pr-3 pt-3 pb-3 my-2'>Order Now</button>
    </div>
  )
}
