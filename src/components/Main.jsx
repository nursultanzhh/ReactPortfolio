import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Main Background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Nursultan</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://x.com/Nursult12864663" target="_blank" rel="noopener noreferrer">
              <FaXTwitter  size={20} className="cursor-pointer"/>
            </a>
            <a href="https://www.facebook.com/nursultan.zhumamuratov" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="cursor-pointer"/>
            </a>
            <a href="https://www.instagram.com/nursultan_zhh/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="cursor-pointer"/>
            </a>
            <a href="https://www.linkedin.com/in/nursultan-zhumamuratov/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} className="cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
