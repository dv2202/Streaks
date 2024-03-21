import React from 'react'
import logo from '../assets/zerodha6662.jpg'
import Title from './Title'
import Summary from './Summary'
import Support from './Support'
import MovingAvg from './MovingAvg'
import Oscillators from './Oscillators'

const Container = () => {
  return (
    <div className='m-2  h-fit border rounded-lg border-slate-300  '>
        <div className='w-full h-[65px] pl-4 bg-white items-center flex rounded-md drop-shadow-sm'>
            <img src={logo} alt="logo" className='h-[27px]'/>
        </div>

        <Title/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-3 pr-3 pb-2 pt-2">
            <Summary pointer1={8}/>
            <Support pointer1={2}/>
            <MovingAvg pointer1={81}/>
            <Oscillators pointer1={10}/>
        </div>

    </div>
  )
}

export default Container
