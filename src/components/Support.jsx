import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import NewSlider from './newSlider';
const Support= ({ pointer1 }) => {
  const leftPosition = `${pointer1}%`;

  return (
    <div className="p-3 shadow-md min-h-[335px] bg-white rounded-lg bg-primary">
      <div className='flex items-center justify-between'>
        <p className='text-[15px] font-bold'>Support & Resistance</p>
        <CiCircleInfo className='text-2xl text-blue-500'/>
      </div>
      <div className='flex flex-col w-[80%] h-[100%] mx-auto gap-[10px]'>
        <div className='mt-[20px] flex justify-center'>
          <div className='relative flex items-center justify-center'>
            <NewSlider pointer={pointer1}/>
          </div>
        </div>
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row mt-[10px] mb-[20px] justify-center gap-[36px]'>
                <p className='font-medium text-[12px]'>S3</p>
                <p className='font-medium text-[12px]'>S2</p>
                <p className='font-medium mr-[36px] text-[12px]'>S1</p>
            </div>
            <div className='flex flex-row mt-[10px] mb-[20px] justify-center space-x-[36px]'>
                <p className='font-medium ml-[36px] text-[12px]'>R1</p>
                <p className='font-medium text-[12px]'>R2</p>
                <p className='font-medium text-[12px]'>R3</p>
            </div>
        </div>
        <div className='flex flex-wrap justify-center text-center mb-[15px] mt-[10px]'>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>21576.17</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>S1</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>21169.53</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>S2</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>20402.23</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>S3</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>22343.47</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>R1</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>22704.13</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>R2</p>
            </div>
            <div className='flex flex-col w-[30%]  mt-[10px]'>
                <p className='text-[15px] font-light text-black'>23471</p>
                <p className='text-[13px] font-light text-[#9BABC6]'>R3</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Support
