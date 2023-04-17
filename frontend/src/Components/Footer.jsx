import React from 'react';
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer
      className="w-full bg-gray-100 pt-2 shadow 
    shadow-cousseiro-500"
    >
      <div className="container px-4 mx-auto md:px-12 lg:px-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center">
            <h1 className="text-center">CostaCousseiroTech</h1>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end md:gap-8">
              <li>
                <a href="#" className="hover:text-cousseiro-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cousseiro-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cousseiro-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cousseiro-300">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-end space-x-4">
              <a href="#contato" aria-label="call">
                <BsFacebook />
              </a>
              <a href="#about" aria-label="send mail">
                <BsInstagram />
              </a>
              <a href="#" title="facebook" target="blank" aria-label="facebook">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="py-4 text-center">
          <span className="text-sm tracking-wide">
            All rights reserved | Copyright ©<span id="year">2023</span>{' '}
            CostaCousseiroTech
          </span>
        </div>
      </div>
    </footer>
  );
}
