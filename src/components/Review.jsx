import React from 'react'

import ImageCarousel from "../components/Carosol"


export default function Review() {

    
  return (
    <div className='max-w-[1100px] w-full mx-auto items-center justify-between gap-6   md:py-6 overflow-x-auto'>
      <div>
                          <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto   gap-10 md:gap-15">
      
                              {/* left Part */}
                              <div className="w-full md:w-1/2 ml-6">
                                  <div className="space-y-10 text-center md:text-left px-2 md:px-0">
                                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-darkblue leading-tight font-taviraj">
                                         What our customers 
have to say…
                                      </h1>
      
                                      <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto md:mx-0 ">
                                         Millions have already successfully used Paxful and they have 
had a lot of nice things to say about us.
                                      </p>
    
                                  </div>
                              </div>
      
                              {/* right Part */}
                              <div className="w-full md:w-1/2 flex justify-center">
  <ImageCarousel />
</div>
      
      
      
                          </div>
                      </div>
    </div>
  )
}
