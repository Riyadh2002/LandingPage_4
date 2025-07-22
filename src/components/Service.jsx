import React from 'react'
import man from "../assets/image/laptop.png"
import wome from "../assets/image/Women1.png"
import women from "../assets/image/women.png"

export default function Service() {
    return (
        <>
            <div className='max-w-[1100px] w-full mx-auto items-center justify-between gap-6   md:py-6 overflow-x-auto'>
                {/* upper section */}
                <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto  py-20 gap-10 md:gap-15">

                    {/* Left Part */}
                    <div className="w-full md:w-1/2 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                        <img
                            src={man}
                            alt="Man illustration"
                            className="w-full max-w-[500px] h-full object-contain"
                        />
                    </div>


                    {/* Right Part */}
                    <div className="w-full md:w-1/2 ml-6">
                        <div className="space-y-10 text-center md:text-left px-2 md:px-0">
                            <h1 className="text-3xl sm:text-3xl md:text-4xl font-light text-darkblue leading-tight font-taviraj">
                                Any space, any place
                            </h1>

                            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto md:mx-0 ">
                                Ofspace Digital Surveyors are certified by RICS and scan every
                                property using the Leica BLKGO, a revolutionary 3D camera.
                            </p>

                            <div>
                                <button className="bg-custom-maincolor text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-opacity-90 transition">
                                    Discover the benefit
                                </button>
                            </div>
                        </div>
                    </div>

                </div>





                {/* lower section */}
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between max-w-full w-full mx-auto   gap-10 md:gap-15">

                        {/* left Part */}
                        <div className="w-full md:w-1/2 ml-6">
                            <div className="space-y-10 text-center md:text-left px-2 md:px-0">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-darkblue leading-tight font-taviraj">
                                    Ultra-precise property
                                    measurement
                                </h1>

                                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto md:mx-0 ">
                                    Ofspace Digital Surveyors are certified by RICS and scan every
                                    property using the Leica BLKGO, a revolutionary 3D camera.
                                </p>

                                <div>
                                    <button className="bg-custom-maincolor text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:bg-opacity-90 transition">
                                        Discover the benefit
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* right Part */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img src={wome} alt="Man illustration" className="w-full max-w-full h-auto object-contain" />
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
