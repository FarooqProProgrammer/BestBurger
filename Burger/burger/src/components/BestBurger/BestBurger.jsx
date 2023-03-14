import React from 'react'
import BestBurgerPic from "../../assets/BestBurger.png"

export default function BestBurger() {
    return (
        <section class=" py-12 bg-red-400">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-around  items-center">
                <div class="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
                    <img class="rounded-lg " src={BestBurgerPic} alt="" />
                </div>
                <div class="w-full md:w-1/2 lg:w-3/5 px-4">
                    <h2 class="text-3xl leading-9 font-bold text-gray-100 sm:text-4xl sm:leading-10 mb-4">About Us</h2>
                    <p class="text-gray-100 text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="text-gray-100 text-lg mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p class="text-gray-100 text-lg mb-8">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button class="bg-gray-100 text-red-300 py-3 px-8 rounded-full text-lg font-medium hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

    )
}
