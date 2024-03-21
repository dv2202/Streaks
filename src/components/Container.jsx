import React from 'react'
import logo from '../assets/zerodha6662.jpg'
import Title from './Title'
import Summary from './Summary'
import Support from './Support'
import MovingAvg from './MovingAvg'
const Container = () => {
  return (
    <div className='m-4 p-4  h-fit border rounded-lg border-blue-950 '>
        <div className='w-full h-6 bg-white'>
            <img src={logo} alt="logo" className='h-[27px] '/>
        </div>
        <Title name="Nifty50"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Summary pointer1={8}/>
            <Support pointer1={8}/>
            <MovingAvg pointer1={8}/>
        </div>

    </div>
  )
}

export default Container
