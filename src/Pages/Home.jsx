import React from "react";
import rectangle1 from "../assets/Rectangle.png";
import rectangle2 from "../assets/Rectangle (1).png";
import r1 from "../assets/doradesign.png";
import r2 from "../assets/Frame.png";
import r3 from "../assets/wavefun.png";

const Home = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-[#010208]">
      <section className="w-10/12 h-screen flex flex-col justify-center items-center">
        <div className="w-full text-white text-[64px] font-extrabold flex flex-col justify-center items-center leading-[80px]">
          <div className="flex justify-center items-center">
            I AM A{" "}
            <img
              src={rectangle1}
              className="bg-transparent mx-2"
              alt="rectagle1"
            />
            FREELANCE
          </div>
          <div className="flex justify-center items-center">
            DESIGNER{" "}
            <img
              src={rectangle2}
              className="bg-transparent mx-2"
              alt="rectagle2"
            />
            FROM
          </div>
          SAN-FRANSISCO
        </div>

        <div className="mt-[112px] flex justify-between items-center">
          <div className="w-6/11 flex justify-center items-center">
            <div className="w-1/3 flex justify-center items-center">
              <img src={r1} alt="r1" />
            </div>
            <div className="w-1/3 flex justify-center items-center">
              <img src={r2} alt="r2" />
            </div>
            <div className="w-1/3 flex justify-center items-center ">
              <img src={r3} alt="r3" />
            </div>
          </div>
          <div className="w-4/11 text-white">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </div>
        </div>
      </section>

      <section className="w-10/12 h-screen flex flex-col justify-center items-center bg-blue-900">
       
      </section>
    </div>
  );
};

export default Home;
