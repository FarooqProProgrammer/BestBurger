import React from 'react'
import ChefOne from "../../assets/ChefOne.png"
import ChefTwo from "../../assets/ChefTwo.png"




export default function Chef() {
  return (
    <section class="bg-orange-100 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base base_color font-semibold tracking-wide uppercase">Our Chefs</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight base_color sm:text-4xl">
            Meet the team
          </p>
          <p class="mt-4 max-w-2xl text-xl base_color lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <img class="h-48 w-48 rounded-full" src={ChefOne} alt="" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg leading-6 font-medium base_color">Jane Doe</h3>
                  <p class="text-md leading-5 base_color">Head Chef</p>
                  <p class="mt-4 max-w-2xl text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </li>

            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <img class="h-48 w-48 rounded-full" src={ChefTwo} alt="" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg leading-6 font-medium base_color">John Doe</h3>
                  <p class="text-md leading-5 base_color">Sous Chef</p>
                  <p class="mt-4 max-w-2xl text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>

  )
}
