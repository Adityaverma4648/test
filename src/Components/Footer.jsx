/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import star from "../assets/Star.png";

const Footer = () => {
  const links = [
    { name: "Dribble", link: "" },
    { name: "Behance", link: "" },
    { name: "Twitter", link: "" },
    { name: "Instagram", link: "" },
  ];

  const animation = ["WEBFLOW", "FIGMA", "DESIGNER", "DEVELOPER"];

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#010208] py-[64px] syne">
      <div className="w-screen h-[88px] flex justify-start items-start p-1 overflow-hidden mb-[64px]">
        <motion.div
          className="w-auto h-full flex"
          animate={{ x: ["0%", "-65%"] }} // Moves left
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        >
          {[...animation, ...animation, ...animation]?.map((item, index) => {
            return (
              <div
                key={index}
                className="font-bold text-[56px] flex justify-center items-center"
              >
                <div className="text-stroke-3 white-space-nowrap mx-[32px]">
                  {item}
                </div>
                <img src={star} className="me-[32px]" alt="star" />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-full  flex justify-center items-center text-center text-white text-[64px] font-extrabold leading-[80px] mb-[32px]">
          LET'S TALK!
        </div>

        {/* poppins */}
        <div className="text-white text-[18px] flex justify-center items-center">
          rehanurraihan@gmail.com
          <FaArrowUp className="ms-2 rotate-45" color="#fff" size={16} />
        </div>
      </div>

      <div className="w-10/12 flex md:flex-row flex-col justify-between items-center mt-[32px]">
        <div className="text-white text-[14px] leading-[20px]">
          © Rehan Raihan - 2023
        </div>

        <div className="md:w-auto w-full my-[32px] md:block flex justify-between items-center">
          {links?.map((d, index) => {
            return (
              <Link
                to={d.link}
                key={index}
                className="text-white text-[14px] leading-[20px] md:me-[64px] me-0"
              >
                {d.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
