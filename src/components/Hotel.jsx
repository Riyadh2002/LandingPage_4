import React from 'react'
import hotel from "../assets/image/Hotel.png"
export default function Hotel() {
    return (
        <div className='max-w-[1100px] w-full mx-auto items-center justify-between gap-6   md:py-6 overflow-x-auto'>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto  py-20 gap-10 md:gap-15">

                {/* Left Part */}
                <div className="w-full md:w-1/2 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                    <img
                        src={hotel}
                        alt="Man illustration"
                        className="w-full max-w-[500px] h-full object-contain"
                    />
                </div>


                {/* Right Part */}
                <div className="w-full md:w-1/2 ml-6">
                    <div className="space-y-10 text-center md:text-left px-2 md:px-0">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-light text-darkblue leading-tight font-taviraj">
                            Hassle-free property
                            marketing
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto md:mx-0 ">
                            Share a property’s photographs, Verified floor
                            plan and virtual tour with a single, convenient link.
                        </p>

                        <div>
                            <button className="bg-custom-maincolor text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-opacity-90 transition">
                                View Digital brochure
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
