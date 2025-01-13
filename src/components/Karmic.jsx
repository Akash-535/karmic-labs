import React from 'react'
import { KARMIC_LIST } from '../utils/helper';
import Heading from '../common/Heading';
const Karmic = () => {
  return (
    <div id='about' className="relative px-5">
      <img src="./assets/right-white-layer.webp" alt="layer" className=' absolute top-[-50%] right-0' />
      <div className="container pt-20 max-xl:pt-14 max-lg:pt-10 relative z-20 max-md:pt-2">
        <div className="max-w-[606px] max-sm:max-w-[320px] mx-auto relative">
          <img
            src="./assets/text-border-white.webp"
            alt="text borders"
            className=" absolute -top-8 left-[15%] max-xl:-top-8 max-md:-top-9 max-sm:max-w-[230px] max-sm:-top-3.5"
          />
          <Heading text="Who is karmic?" />
        </div>
        <p className="text-white font-normal text-base leading-custom-6xl text-center pt-9 font-grotesk max-md:pt-7">
          We are builders, innovaters, and believers.
        </p>
        <p className="text-white text-base font-normal max-w-[570px] mx-auto text-center leading-custom-6xl font-grotesk pt-0.5">
          We believe in a future that rests in your hands, and yours alone. The
          future is decentralized, The future is web3.
        </p>
        <div className="flex items-center justify-center mt-10 max-lg:mt-8 max-xl:flex-wrap max-sm:mt-6">
          {KARMIC_LIST.map((obj, i) => (
            <img
              src={obj}
              alt="karmic"
              key={i}
              className="w-full max-w-[369px] pointer-events-none max-lg:max-w-80 max-sm:max-w-72"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Karmic