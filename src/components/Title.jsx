import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
const Title = () => {
    
  return (
    <div className="flex flex-row gap-3 mt-3 pl-4 items-center">
      <button type="button" className="p-0">
        <MdArrowBackIosNew/>
      </button>
      <div className='flex flex-col'>
        <div className='flex gap-2'>
          <div className="flex  items-center  h-[25px] w-[25px]">
            <img src="https://technicals.zerodha.com/static/media/NSE.62a33981.svg" alt="INDICES_NIFTY 500" width="100%" height="100%" />
          </div>
          <div className="flex flex-row items-baseline overflow-hidden">
            <p className="font-semibold text-lg whitespace-nowrap overflow-hidden text-ellipsis text-var-text">Nifty50</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-row items-center w-full">
            <div className="md:mr-2 mr-0 w-[90px]">
              <p className="font-semibold text-base text-var-text">&#8377; 19897.40</p>
            </div>
              <IoMdArrowRoundUp className='text-green-500'/>
            <p className="text-sm font-semibold text-green-500">(1.35%)</p>
          </div>
      </div>
     
    </div>
    <div className='sm:hidden md:flex w-full items-center justify-center'>
      <div className='hidden sm:flex flex-row  h-[29px] bg-white rounded-md text-[#9BABC6]'>
        <div className='text-center items-center justify-center  h-full cursor-pointer hidden sm:flex'>
          <p className='p-4'>5min</p>
        </div>
        <div className='text-center items-center justify-center  h-full cursor-pointer hidden sm:flex'>
          <p className='p-4'>10min</p>
        </div>
        <div className='text-center items-center justify-center  h-full cursor-pointer hidden sm:flex'>
          <p className='p-4'>15min</p>
        </div>
        <div className='text-center items-center justify-center  h-full cursor-pointer hidden sm:flex'>
          <p className='p-4'>30min</p>
        </div>
        <div className='text-center items-center justify-center  h-full cursor-pointer hidden sm:flex'>
          <p className='p-4'>hour</p>
        </div>
        <div className='text-center items-center justify-center h-full cursor-pointer hidden sm:flex bg-blue-500 rounded-md text-white'>
          <p className='p-4'>1 Day</p>
        </div>
      </div>
    </div>

  </div>

  );
};

export default Title;
