import React from 'react';
import Present from '/presentation.jpg';
import { BsRobot } from 'react-icons/bs';

export default function Hero() {
  return (
    <div className="relative p-4 md:p-24">
      <div className="absolute inset-0">
        <img
          className="top-0 left-0 w-full h-full object-cover bg-opacity-30 backdrop-blur-sm"
          style={{ filter: 'blur(5px)', zIndex: '-1' }}
          src={Present}
          alt="Presentation"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-cousseiro-500 opacity-70"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 lg:px-48">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-4 text-center">
          Revolutionizing Your Workplace with Process Automation{' '}
          <BsRobot className="text-white mx-auto " />
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-costa-300">
          Say goodbye to tedious, repetitive tasks - our cutting-edge software
          bots automate your processes so you can focus on what really matters.
        </p>
      </div>
    </div>
  );
}
