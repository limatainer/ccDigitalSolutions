import React from 'react';

export default function Call() {
  return (
    <div
      className="bg-gradient-to-br from-costa-300 to-slate-100 py-16 
    md:bg-gradient-to-r"
    >
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2
          className="mb-8 animate-text bg-gradient-to-r from-teal-500
         via-cousseiro-500 to-indigo-500 bg-clip-text text-transparent 
         text-5xl font-black  md:text-4xl "
        >
          Let's get started
        </h2>
        <a
          href="#contato"
          className="relative flex h-12 w-full mx-auto items-center justify-center
           px-8 before:absolute before:inset-0 before:rounded-full before:bg-white
            before:transition before:duration-300 hover:before:scale-105 
            active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span
            className="relative text-base font-semibold
           text-cousseiro-600"
          >
            Request a talk
          </span>
        </a>
      </div>
    </div>
  );
}
