import React from 'react'
import Header_logo from "../../assets/Header_logo.png"


export default function Header() {
  return (
    <div className='w-full flex-1 border-2 border-white flex justify-around items-center'>
      <div className="logo w-[60px] h-[60px]">
        <img src={Header_logo} alt="" />
      </div>
      <div className="links flex text-white gap-10">
        <span className='text-xl font-bold cursor-pointer'>Home</span>
        <span className='text-xl font-bold cursor-pointer'>Product</span>
        <span className='text-xl font-bold cursor-pointer'>Contact</span>
        <span className='text-xl font-bold cursor-pointer'>Promo</span>
        <span className='text-xl font-bold cursor-pointer'>About</span>
        
      </div>
    </div>
  )
}
