import React from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { IoMdArrowRoundUp } from "react-icons/io";
const Title = () => {
    
  return (

    <div className="flex flex-row gap-3 mt-5">
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
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <p className="font-semibold text-base text-var-text">&#8377; 19897.40</p>
            </div>
              <IoMdArrowRoundUp className='text-green-500'/>
            <p className="text-sm font-semibold text-green-500">(1.35%)</p>
          </div>
      </div>
    </div>
  </div>

  );
};

export default Title;
