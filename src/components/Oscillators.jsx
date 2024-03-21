import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Summary = ({ pointer1 }) => {
  const leftPosition = `${pointer1}`;
console.log(leftPosition)
  return (
    <div className="p-3 shadow-md min-h-[335px] bg-white rounded-lg bg-primary">
      <div className='flex items-center justify-between'>
        <p className='text-[15px] font-bold'>Oscillator</p>
        <CiCircleInfo className='text-2xl text-blue-500'/>
      </div>
      <div className='flex flex-col w-[80%] h-[100%] mx-auto gap-[10px]'>
        <div className='mt-[20px] flex justify-center'>
          <div className='relative flex items-center justify-center'>
            {/* Placeholder image */}
            <img src="https://technicals.zerodha.com/static/media/bar_oscillator.ed2bf1c3.svg" alt="slider" className='w-full' />
            {/* Pointer image */}
            <img
              src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg"
              alt="pointer"
              className={`w-[5%] absolute transform -translate-x-1/2 left-[${leftPosition}%]`} 
            />
          </div>
        </div>
        <div className='flex flex-row gap-10 justify-center'>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>3</p>
                <p className='bg-red-200 text-red-800 rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bearish</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>6</p>
                <p className='bg-[#EBEFF5] text-[#666769] rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Neutral</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>1</p>
                <p className='bg-blue-200  text-blue-700 rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bullish</p>
            </div>
        </div>
        <div className='flex flex-col items-center mb-[20px] justify-evenly'>
            <div className='flex flex-row gap-4 w-[60%] justify-between mt-5'>
                <div className='w-[20px] h-[20px] flex bg-[#EBEFF5] text-[12px] text-[#6e6e6e] text-center justify-center items-center rounded-sm '><p>N</p>
                </div>
                <div className='flex w-full flex-row justify-between items-center'>
                    <p className='text-[12px] font-normal text-black'>RSI(14)</p>
                    <p className='text-[12px] font-normal text-black'>41.60</p>
                </div>
            </div>
            <div className='flex flex-row gap-4 w-[60%] justify-between mt-5'>
                <div className='w-[20px] h-[20px] flex bg-[#EBEFF5] text-[12px] text-[#6e6e6e] text-center justify-center items-center rounded-sm'><p>N</p>
                </div>
                <div className='flex w-full flex-row justify-between items-center'>
                    <p className='text-[12px] font-normal  text-black'>Stoch.%K(14,3,3)</p>
                    <p className='text-[12px] font-normal text-black'>7</p>
                </div>
            </div>
        </div>
        <p className='flex justify-end text-[13px] items-center text-slate-500'>View Details <MdOutlineKeyboardArrowDown/></p>
      </div>
    </div>
  );
}

export default Summary;
