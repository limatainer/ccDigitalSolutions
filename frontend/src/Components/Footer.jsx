import React from 'react';
import { navigation } from '../constants';
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer className="w-full bg-costa-300 pt-2 ">
      <div className="container px-4 mx-auto md:px-12 lg:px-28 text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center m-4 ">
            <h1 className="text-2xl">CBot Tech</h1>
            <h1 className="text-xl">Email:</h1>
            <h1>
              {' '}
              <span className="text-cousseiro-500">digitalsolutionscbot</span>
              @gmail.com{' '}
            </h1>
          </div>

          <div className="flex justify-center ">
            <ul
              className="flex flex-col items-center justify-center
             gap-6 md:flex-row md:justify-end md:gap-8 "
            >
              {navigation.map((nav, index) => (
                <li key={index}>
                  <a
                    href={`#${nav.id}`}
                    aria-label="Our product"
                    title={nav.title}
                    className=" tracking-wide text-cc-300 
              transition-colors duration-200 hover:text-costa-600"
                  >
                    {nav.title}{' '}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-end space-x-4">
              <a href="#contato" aria-label="call">
                <BsFacebook className="bi fs-2x text-cousseiro-600 w-6 h-6" />
              </a>
              <a href="#about" aria-label="send mail">
                <BsInstagram className="bi fs-2x text-cousseiro-600 w-6 h-6" />
              </a>
              <a
                href="#why"
                title="facebook"
                target="blank"
                aria-label="facebook"
              >
                <BsLinkedin className="bi fs-2x text-cousseiro-600 w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="py-4 text-center">
          <span className="text-sm tracking-wide">
            All rights reserved | Copyright ©<span id="year">2023</span>{' '}
            CBotTech
          </span>
        </div>
      </div>
    </footer>
  );
}
