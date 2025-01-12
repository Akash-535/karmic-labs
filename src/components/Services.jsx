import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_LIST } from '../utils/helper'
import { MoonIcon } from '../utils/icons'

const Services = () => {
  return (
    <div id='services' className='px-5 relative'>
       <img
          src="./assets/right-white-layer.webp"
          alt="layer"
          className="absolute right-0 -top-[36%] "
        />
           <img
        src="./assets/white-left-layer.webp"
        alt="layer"
        className=" absolute -bottom-1/2 left-0 z-0"
      />
        <div className='container'>
        <div className="max-w-[570px] max-sm:max-w-[320px] mx-auto relative">
            <Heading text="Services" />
            <img
              src="./assets/text-border-white.webp"
              alt="borders"
              className=" absolute -top-7 max-xl:-top-9 left-24 max-sm:left-10 max-sm:max-w-[261px] max-sm:-top-6"
            />
          </div>
        <div className='flex flex-wrap gap-2 pt-[77px] max-xl:justify-center'>
            {SERVICES_LIST.map((obj , i) => (
                <div key={i} className='group w-full max-w-[369px] relative'>
                    <div className='group-hover:opacity-100 opacity-0 absolute -top-9 -right-9 -z-10 duration-300 ease-linear max-sm:-right-5'><MoonIcon/></div>
                    <div className='p-5 group-hover:backdrop-blur-[16px] group-hover:bg-off-white group-hover:border-off-white border border-transparent rounded-xl transition-all duration-300 ease-linear min-h-[276px]'>
                        {obj.icon}
                        <h4 className='text-xl font-bold leading-custom-4xl text-white pt-5'>{obj.name}</h4>
                        <p className='text-base text-white font-normal leading-custom-5xl max-w-[329px] font-grotesk pt-1.5'>{obj.description}</p>
                       <ul className='text-white list-disc font-grotesk ml-5 mt-1.5'>
                      {(obj.list || []).map((item , i) => (
                        <li key={i}>{item}</li>
                      ))}
                       </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Services