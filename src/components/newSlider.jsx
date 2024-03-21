import React from 'react';

function newSlider({ pointer }) {
  return (
    <div className="relative">
      <div className="flex items-center justify-center mt-5 gap-4">
        {[...Array(17).keys()].map((index) => (
          <div
            key={index}
            className={`w-1 h-12 bg-gradient-to-b from-purple-600 to-purple-800 rounded-md`}
          />
        ))}
      </div>
      <img
        className="absolute top-[44px] transform -translate-y-1/2 bg-red-500 w-4 h-4 rounded-full"
        style={{
            left: `calc(${(pointer / 17) * 100}% - 1.1rem)`,
        }}
        src="https://technicals.zerodha.com/static/media/pointer_resistance.645dfcd4.svg"
        alt=""
        />
    </div>

    
  );
}

export default newSlider;
