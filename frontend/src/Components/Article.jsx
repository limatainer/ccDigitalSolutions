import React from 'react';
import Network from '/network.jpg';
export default function Article() {
  return (
    <>
      <div className="p-5 mx-auto sm:p-10 md:p-16 ">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={Network}
            alt=""
            className="w-full h-60 sm:h-96"
            loading="lazy"
          />
          <div
            className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl
           sm:px-10 sm:mx-12 lg:rounded-md bg-costa-300 shadow-lg"
          >
            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
              Robotic Process Automation is transforming industries across the
              board. Are you ready to revolutionize your business?
            </h1>

            <h2 className="text-md">
              Whatever your automation and RPA needs may be, we are here to
              analyze them and provide the best ROI-focused solutions possible.
            </h2>

            <p>
              At Costa Cousseiro, we pride ourselves on offering the best of
              both worlds:he corporate-level quality of service you expect from
              a large agency, combined with the personal touch and attention to
              detail you'd find at a boutique agency.
            </p>
          </div>
        </div>
      </div>
      {/* Presentation Section */}
      <div className="flex flex-col md:flex-row p-8 md:px-8 lg:px-16 my-8 ">
        <div className="w-full md:w-1/2 md:pr-4 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            This is your premier RPA development agency.
          </h2>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 rounded shadow-md ">
          <p className="text-base md:text-lg text-costa-600 p-4">
            Our expertise spans across all industries and company sizes,
            providing innovative solutions with automations and freeing up your
            employees' valuable time and maximizing their productivity, making a
            meaningful impact on your bottom line every single day.
          </p>
        </div>
      </div>
    </>
  );
}
