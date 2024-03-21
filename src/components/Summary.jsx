import React from 'react';
import { CiCircleInfo } from "react-icons/ci";


const Summary = ({ pointer1 }) => {
  const leftPosition = `${pointer1}`;
  console.log(leftPosition)
  return (
    <div className="p-3 shadow-md min-h-[335px] bg-white rounded-lg bg-primary">
      <div className='flex items-center justify-between'>
        <p className='text-[15px] font-bold'>Summary</p>
        <CiCircleInfo className='text-2xl text-blue-500'/>
      </div>
      <div className='flex flex-col w-[80%] h-[100%] mx-auto gap-[10px]'>
        <div className='mt-[20px] flex justify-center'>
          <div className='relative flex items-center justify-center'>
            {/* Placeholder image */}
            <img src="https://technicals.zerodha.com/static/media/bar.8505e185.svg" alt="slider" className='w-full' />
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
                <p className=' text-[13px] text-black text-center'>6</p>
                <p className='bg-red-200 text-red-800 rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bearish</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>9</p>
                <p className='bg-[#EBEFF5] text-[#666769] rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Neutral</p>
            </div>
            <div className='flex-col flex'>
                <p className=' text-[13px] text-black text-center'>9</p>
                <p className='bg-green-200  text-green-700 rounded text-[12px] flex items-center text-center
                pt-[2px] pb-[2px] pl-[12px] pr-[12px]'>Bullish</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center text-center mb-[15px] mt-[10px]'>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>19976.43</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>EMA (20)</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>22164.35</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>SMA (20)</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>41.60</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>RSI (14)</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>-81.68</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>Awesome Osc.</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>13.49</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>Macd (12, 26, 9)</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>-161.87</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>CCI (20)</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
