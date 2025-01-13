import React from 'react'
import {MEDIA_ICON_LIST } from '../utils/helper'
import { FooterLogo } from '../utils/icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="pt-[100px] max-xl:pt-20 max-lg:pt-16 max-md:pt-14 max-sm:pt-10 flex flex-col justify-center items-center">
      <a href="/" className='footer-logo'>
     <FooterLogo/>
      </a>
      <div className="flex items-center gap-6 justify-center mt-20 max-lg:mt-14 max-md:mt-8 max-sm:mt-4">
        {MEDIA_ICON_LIST.map((obj, i) => (
          <div
            key={i}
            className="bg-white flex items-center justify-center rounded-full border border-solid border-white size-[35px]"
          >
            <a href={obj.link} target="_blank" className='hover:scale-110 duration-300 ease-linear'>
              {obj.icon}
            </a>
          </div>
        ))}
      </div>
      <div className="w-full border border-solid border-white mt-4"></div>
          <p className='text-center font-normal text-base font-grotesk leading-[28.8px] text-white py-4 opacity-70'>© Karmic labs {currentYear}</p>
    </div>
  );
}

export default Footer