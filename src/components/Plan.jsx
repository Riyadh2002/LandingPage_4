import React from 'react'
import red from "../assets/image/red.jpg"
import light from "../assets/image/lightRed.jpg"
import yellow from "../assets/image/yellow.png"

export default function Plan() {
  return (
    <>
   <div className="bg-[rgba(255,81,81,0.05)] px-4 py-20 w-full max-w-[1100px] mx-auto rounded-xl">
  {/* Section Title */}
  <div className="mb-10 text-center">
    <p className="font-taviraj text-4xl md:text-5xl  text-gray-800">
      Every plan includes these essentials:
    </p>
  </div>

  {/* Feature Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {/* Item 1 */}
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md text-center space-y-3 hover:shadow-xl transition">
      <img src={red} alt="Virtual Tour" className="w-14 h-14 object-contain" />
      <p className="text-sm sm:text-base font-medium text-gray-800">Virtual Tour</p>
      <div className="text-custom-maincolor text-xl">➜</div>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md text-center space-y-3 hover:shadow-xl transition">
      <img src={light} alt="Floor Plan" className="w-14 h-14 object-contain" />
      <p className="text-sm sm:text-base font-medium text-gray-800">Floor Plan</p>
      <div className="text-custom-maincolor text-xl">➜</div>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md text-center space-y-3 hover:shadow-xl transition">
      <img src={red} alt="3D Walkthrough" className="w-14 h-14 object-contain" />
      <p className="text-sm sm:text-base font-medium text-gray-800">3D Walkthrough</p>
      <div className="text-custom-maincolor text-xl">➜</div>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md text-center space-y-3 hover:shadow-xl transition">
      <img src={yellow} alt="Photography" className="w-14 h-14 object-contain" />
      <p className="text-sm sm:text-base font-medium text-gray-800">Photography</p>
      <div className="text-custom-maincolor text-xl">➜</div>
    </div>
  </div>
</div>



    </>
  )
}
