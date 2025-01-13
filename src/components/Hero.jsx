import React from 'react'
import Header from '../common/Header'
import { ButtonNextArrow, HeroArrowIcon } from '../utils/icons'

const Hero = () => {
  return (
    <div id='home' className='relative'>
       <img
        src="./assets/hero-top-layer.webp"
        alt="layer"
        className=" absolute top-0 left-0 z-0"
      />
      <a href="#upcoming"
        className="absolute left-1/2 -translate-x-1/2 bottom-[8%] max-lg:hidden">
        <HeroArrowIcon />
      </a>
        <Header/>
        <div className="bg-cover bg-no-repeat bg-center lg:bg-hero-bg max-lg:bg-mix-white max-lg:mt-5 h-[726px] max-lg:h-full max-xl:px-5 2xl:mt-10">
        <div className="container">
          <div
            className="flex items-center max-lg:flex-wrap max-md:pt-16 max-xl:!justify-center pt-32 max-xl:py-24 max-lg:py-16
           max-md:py-10 max-sm:py-6 gap-[158px] max-xl:gap-32 max-lg:gap-24 max-md:gap-16 max-sm:gap-10"
          >
            <div className="w-6/12 max-lg:w-full">
              <h1 className="text-white text-custom-7xl max-lg:text-center max-w-[570px] max-lg:max-w-none max-xl:text-5xl max-md:text-4xl max-[374.98px]:text-3xl font-light leading-custom-lg uppercase">
                We are believers decentralization and
                <span className='relative after:absolute after:content-"" after:w-[158px] after:max-xl:w-full after:h-[1px] after:bg-white after:-top-1 after:left-7 after:-rotate-3 after:max-md:left-3 before:absolute before:content-"" before:w-full before:h-[1px] before:bg-white before:bottom-1 before:right-0 before:-rotate-[4deg] before:max-md:bottom-0'> Web3.</span>
              </h1>
              <p className="font-normal text-base max-lg:text-center text-white max-w-[570px] max-lg:max-w-none leading-custom-6xl font-grotesk pt-[13px]">
                Vulputate tristique habitant neque, accumsan. Vitae ultrices
                nulla erat nibh aliquam, quis tempus volutpat arcu. Leo
                convallis luctus dis malesuada turpis non consequat ac.
              </p>
              <div className="flex items-center gap-8 mt-10 max-md:mt-5 max-lg:justify-center">
                <button className="font-bold flex items-center gap-3 leading-5 transition-all justify-center w-[154px] ease-linear duration-300 bg-white  text-black py-[11px] border border-solid border-white rounded-full px-5 hero-btn hover:bg-transparent hover:text-white">
                  Get Started <ButtonNextArrow />
                </button>
                <button className="text-white font-light leading-5 transition-all ease-linear duration-200 min-w-[138px] hover:bg-white hover:text-black py-[11px] border border-solid border-white rounded-full px-8 max-sm:px-3">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-6/12 max-lg:w-full">
              <img
                src="./assets/nubbies-img.webp"
                alt="nubbies-img"
                className="w-full max-w-[398px] max-lg:mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero