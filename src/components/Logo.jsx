import React from 'react'
import descript from '../assets/image/descriptLogo.png'
import intercom from '../assets/image/intercom.png'
import notion from '../assets/image/notionLogo.png'
import volument from '../assets/image/volument.png'


export default function Logo() {
  return (
    <div className="relative overflow-hidden bg-[rgba(220,38,38,0.02)] py-6">
  <div className="flex w-max animate-marquee gap-12 px-6">
    {/* One loop */}
    <div className="flex gap-12 items-center">
      <p className="text-sm md:text-base font-roboto text-gray-700 whitespace-nowrap">
        Trusted by 100+ property brands worldwide
      </p>
      <img src={descript} alt="Descript" className="h-6 md:h-8" />
      <img src={intercom} alt="Intercom" className="h-6 md:h-8" />
      <img src={notion} alt="Notion" className="h-6 md:h-8" />
      <img src={volument} alt="Volument" className="h-6 md:h-8" />
    </div>

    {/* Duplicate for seamless loop */}
    <div className="flex gap-12 items-center">
      <p className="text-sm md:text-base font-roboto text-gray-700 whitespace-nowrap">
        Trusted by 100+ property brands worldwide
      </p>
      <img src={descript} alt="Descript" className="h-6 md:h-8" />
      <img src={intercom} alt="Intercom" className="h-6 md:h-8" />
      <img src={notion} alt="Notion" className="h-6 md:h-8" />
      <img src={volument} alt="Volument" className="h-6 md:h-8" />
    </div>
  </div>
</div>




  )
}
