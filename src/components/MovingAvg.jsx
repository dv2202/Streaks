import React from 'react';
import { CiCircleInfo } from "react-icons/ci";


const MovingAvg = ({ pointer1 }) => {
  const leftPosition = `${pointer1}%`;
  return (
    <div className="p-3 shadow-md min-h-[335px] bg-white rounded-lg bg-primary">
      <div className='flex items-center justify-between'>
        <p className='text-[15px] font-bold'>Moving Average</p>
        <CiCircleInfo className='text-2xl text-blue-500'/>
      </div>
      <div className='flex flex-col w-[80%] h-[100%] mx-auto gap-[10px]'>
        <div className='mt-[20px] flex justify-center'>
          <div className='relative flex items-center justify-center'>
            {/* Placeholder image */}
            <img src="https://technicals.zerodha.com/static/media/bar_ma.1ee3ecd8.svg" alt="" className='w-full' />
            {/* Pointer image */}
            <img
              src="https://technicals.zerodha.com/static/media/pointer.c2b2a6c5.svg"
              alt=""
              className={`w-[5%] absolute transform -translate-x-1/2 left-${leftPosition}`} 
            />
          </div>
        </div>
        <div className='flex flex-row gap-10 justify-center'>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>6</p>
                <p className='bg-[#FFF5E6] text-[#f7b046] rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bearish</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>2</p>
                <p className='bg-[#EBEFF5] text-[#666769] rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Neutral</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>9</p>
                <p className='bg-[#c8e7fa]  text-[#3d98d0] rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bullish</p>
            </div>
        </div>
        <div className='flex flex-col items-center mb-[20px] justify-evenly'>
            <div className='flex flex-row gap-4 w-[60%] justify-between mt-5'>
                <div className='w-[20px] h-[20px] flex bg-red-200 text-[13px] text-red-700 text-center justify-center items-center rounded-sm '><p>S</p>
                </div>
                <div className='flex w-full flex-row justify-between items-center'>
                    <p className='text-[12px] font-medium text-black'>EMA (5)</p>
                    <p className='text-[12px] font-medium text-black'>21934.49</p>
                </div>
            </div>
            <div className='flex flex-row gap-4 w-[60%] justify-between mt-5'>
                <div className='w-[20px] h-[20px] flex bg-red-200 text-[13px] text-red-700 text-center justify-center items-center rounded-sm'><p>S</p>
                </div>
                <div className='flex w-full flex-row justify-between items-center'>
                    <p className='text-[12px] font-medium text-black'>SMA (5)</p>
                    <p className='text-[12px] font-medium text-black'>21962.63</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovingAvg;
