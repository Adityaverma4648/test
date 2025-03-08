import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const CaseStudy = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const workData = [
    {
      title: "Analysis Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["figma", "UX"],
      image: work1,
    },
    {
      title: "Fortknox Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["Mobile", "web"],
      image: work2,
    },
    {
      title: "Zenocide Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["App", "web"],
      image: work3,
    },
    {
      title: "Analysis Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["figma", "UX"],
      image: work1,
    },
    {
      title: "Fortknox Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["Mobile", "web"],
      image: work2,
    },
    {
      title: "Zenocide Application",
      descr:
        "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      skills: ["App", "web"],
      image: work3,
    },
  ];

  const work = workData[index]; // Get the corresponding work item

  if (!work) {
    return <div className="text-white text-center">Case Study Not Found</div>;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#010208]">
      <div className="w-10/12 h-full flex justify-center items-center">
        <div
          key={index}
          className="w-full h-[493px] rounded-2xl overflow-hidden mb-[32px] flex justify-center items-center relative"
        >
          <div className="w-full h-full bg-[#CBCBCB]/50 backdrop-blur-3xl flex justify-center items-center p-[32px] relative z-40 rounded-2xl">
            <div className="w-1/2 h-full flex justify-center items-center me-[32px]">
              <img src={work.image} className="h-full" alt="image" />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-start items-start text-white">
              <div>
                <div className="text-[40px] font-semibold">{work.title}</div>
                <div className="text-[18px]">{work.descr}</div>
                <div className="flex h-[60px] flex justify-start items-center">
                  {work.skills.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="h-[30px] w-[91px] uppercase rounded-[100px] border border-white text-[12px] font-semibold flex flex-col justify-center items-center me-2"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className={`w-full h-full flex justify-start ${
                  index % 2 !== 0 ? "items-end" : "items-start"
                }`}
              >
                <button
                  type="button"
                  className="w-[184px] h-[50px] bg-white text-black text-[14px] font-semibold rounded-[100px]"
                  onClick={() => {
                    navigate(`/case-study/${index}`);
                  }}
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center item-center absolute overflow-hidden">
            <div className="w-[400px] h-[400px] bg-[#FF804A]/50 rounded-[50%] mt-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
