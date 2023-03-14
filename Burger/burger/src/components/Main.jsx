import React from 'react'
import Header from "./Header"
import Hero from "./Hero"

import "./Main.css"

export default function Main() {
  return (
    <div className='Main w-full h-[630px] flex flex-col'>
        <Header />
        <Hero />
    </div>
  )
}
