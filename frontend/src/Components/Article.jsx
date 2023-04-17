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
              both worlds: The corporate-level quality of service you expect
              from a large agency, combined with the personal touch and
              attention to detail you'd find at a boutique agency.
            </p>
          </div>
        </div>
      </div>
      {/* Presentation Section */}
      <div className="flex flex-col md:flex-row p-8 md:px-8 lg:px-16 my-8 ">
        <div className="w-full md:w-1/2 md:pr-4 lg:pr-8 rounded shadow-md">
          <h2 className=" text-center text-3xl md:text-4xl font-bold mb-4">
            We are your premier RPA development agency.
          </h2>
          <p className="text-base md:text-lg text-costa-600 p-4">
            Our expertise spans across all industries and company sizes,
            providing innovative solutions with automations and freeing up your
            employees' valuable time and maximizing their productivity, making a
            meaningful impact on your bottom line every single day. RPA can
            readily scale to manage increased workloads, allowing organizations
            to keep up with rising demand without adding personnel. Adopting RPA
            can offer businesses with a competitive advantage.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pl-4 lg:pl-8 rounded shadow-md ">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
            This is why and how our automation solutions will help your
            business.
          </h1>
          <p className="text-base md:text-lg text-costa-600 p-4">
            With automation, you may complete repetitive, time-consuming
            operations faster and with fewer errors than people, increasing
            productivity and efficiency. Businesses can cut the costs of
            recruiting and educating staff members by automating manual
            procedures, leading to in significant cost savings. RPA can remove
            human errors in data input, calculations, and other regular
            processes, resulting in higher accuracy and less costly blunders.
            Businesses can free up staff time to focus on providing better
            customer service, resulting to higher customer satisfaction, by
            automating mundane operations.
          </p>
        </div>
      </div>
    </>
  );
}
