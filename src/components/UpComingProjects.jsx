import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS_LIST } from '../utils/helper';

const UpComingProjects = () => {
  const totalSeconds = 15 * 3600 + 54 * 60 + 12;
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds);

  useEffect(() => {
    if (timeRemaining <= 0) return
    const intervalId = setInterval(() => setTimeRemaining(prev => prev - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timeRemaining]);
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return (
    <div id='upcoming' className='pt-20 px-5 pb-[136px] text-center'>
      <div className='container'>
     <div className="max-w-[570px] max-sm:max-w-[320px] mx-auto relative">
            <Heading text="Upcoming Projects " />
            <img
              src="./assets/text-border-white.webp"
              alt="borders"
              className=" absolute -top-7 max-xl:-top-9 left-24 max-sm:left-10 max-lg:-top-9 max-sm:max-w-[261px] max-sm:-top-6"
            />
          </div>
     <div className='py-12 flex gap-7 flex-wrap justify-center text-start max-lg:py-10 max-md:py-8 max-sm:py-4 max-md:gap-5 max-sm:gap-3'>
      {UPCOMING_PROJECTS_LIST.map((obj , i)=> (
        <div key={i} className='w-full max-w-[263px] max-md:max-w-[220px] border border-off-white rounded-xl p-4 bg-off-white backdrop-filter backdrop-blur-[30px] shadow-project-box'>
          <img className='max-w-[231px] w-full' src={obj.image} alt="card-image" />
          <div className='pt-4'>
            <div className='flex w-full justify-between items-center'>
              <h4 className='text-xl font-medium leading-custom-3xl text-white'>{obj.name}</h4>
              <p className='text-base font-bold leading-custom-3xl text-white'>{`${hours} : ${minutes} : ${seconds}`}</p>
            </div>
            <p className='text-base text-white font-light leading-custom-6xl'>NFT</p>
          </div>
        </div>
      ))}
     </div>
     <button className="text-white text-center font-medium text-base leading-custom-4xl transition-all ease-linear duration-300 hover:bg-white hover:text-black py-[11px] px-8 border border-solid border-white rounded-full">View All</button>
    </div>
    </div>
  );
};

export default UpComingProjects;
