import React from 'react'
import { VALUE_LIST } from '../utils/helper';
import Heading from '../common/Heading';
import { MoonIcon } from '../utils/icons';

const Values = () => {
  return (
    <div className="container pt-[156px] max-xl:pt-32 max-lg:pt-24 max-md:pt-16 px-5">
      <div className="max-w-[570px] mx-auto relative max-sm:max-w-[320px]">
        <Heading text="Values" />
        <img
          src="./assets/text-border-white.webp"
          alt="border"
          className="absolute -top-5 left-[15%] max-xl:-top-5 max-lg:-top-8 max-md:-top-9 max-sm:max-w-[261px] max-sm:-top-6"
        />
      </div>
      <div className='flex max-xl:flex-wrap gap-4 pt-[77px] max-xl:justify-center max-lg:pt-14 max-md:pt-11 max-sm:pt-9'>
        {VALUE_LIST.map((obj, i) => (
          <div key={i} className='group z-20 w-full max-w-[369px] relative'>
            <div className='group-hover:opacity-100 opacity-0 absolute -top-9 -right-9 -z-10 duration-300 ease-linear max-sm:-right-5'><MoonIcon/></div>
            <div className='p-5 group-hover:backdrop-blur-[16px] group-hover:bg-off-white border-off-white border rounded-xl transition-all duration-300 ease-linear'>
             {obj.icon}
              <h3 className="font-grotesk text-white font-bold text-xl leading-custom-4xl py-2.5">
                {obj.title}
              </h3>
              <p className="text-white font-normal font-grotesk text-base max-w-[329px] leading-6">
                {obj.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values