import React, { useState } from "react";

// importing assets
import rectangle1 from "../assets/Rectangle.png";
import rectangle2 from "../assets/Rectangle (1).png";
import r1 from "../assets/doradesign.png";
import r2 from "../assets/Frame.png";
import r3 from "../assets/wavefun.png";
import star from "../assets/Star.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import group from "../assets/Group.png";
import profile from "../assets/profile.png";

// importing components
import Section from "../Components/Section";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Home = () => {
  const [viewAll, setViewAll] = useState(false);
  const [viewAllBlogs, setViewAllBlogs] = useState(false);
  const [count, setCount] = useState(0);
  const [activeAnswer, setActiveAnswer] = useState(0);
  const navigate = useNavigate();

  const expertise = [
    {
      title: "Branding",
      descr:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UI Design",
      descr:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UX Design",
      descr:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
    },
    {
      title: "Development",
      descr:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    },
  ];

  const work = [
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

  const experience = [
    {
      role: "Lead Product Designer",
      Org: "Fortknox",
      from: "Mar 2022",
      to: "Oct 2023",
    },
    {
      role: "Intern Designer",
      Org: "OmniSafe",
      from: "Mar 2022",
      to: "Oct 2023",
    },
    {
      role: "UI Designer",
      Org: "Doradesign",
      from: "Mar 2022",
      to: "Oct 2023",
    },
    {
      role: "Frontend Developer",
      Org: "OpacityAuthor",
      from: "Mar 2022",
      to: "Oct 2023",
    },
  ];

  const blog = [
    {
      date: "Nov 9,2023",
      title: "How UX works in web",
      skills: ["UI", "UX"],
      image: blog1,
    },
    {
      date: "Aug 18,2023",
      title: "Case study - Analysis Application.",
      skills: ["Design", "Print"],
      image: blog2,
    },
    {
      date: "Feb 16,2023",
      title: "3 ways to develop your skill",
      skills: ["Figma", "Web"],
      image: blog3,
    },
    {
      date: "Nov 9,2023",
      title: "How UX works in web",
      skills: ["UI", "UX"],
      image: blog1,
    },
    {
      date: "Aug 18,2023",
      title: "Case study - Analysis Application.",
      skills: ["Design", "Print"],
      image: blog2,
    },
    {
      date: "Feb 16,2023",
      title: "3 ways to develop your skill",
      skills: ["Figma", "Web"],
      image: blog3,
    },
  ];

  const feedbacks = [
    {
      name: "Floyd Miles",
      source: "eBay",
      image: profile,
      comment:
        "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
    },
    {
      name: "Donald Trump",
      source: "Truth Social",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/220px-TrumpPortrait.jpg",
      comment:
        "This resume builder? Absolutely tremendous. People are saying it's the best. Nobody makes resumes better than this, believe me. Just fantastic!",
    },
    {
      name: "Deadpool",
      source: "Chimichanga Weekly",
      image:
        "https://static.independent.co.uk/2024/11/10/13/MixCollage-10-Nov-2024-01-50-PM-7693.jpg",
      comment:
        "This resume builder is so good, even Wolverine might consider applying for a job... Nah, who am I kidding? He’s too busy brooding. But seriously, this thing rocks!",
    },
    {
      name: "Michael Scott",
      source: "Dunder Mifflin",
      image:
        "https://s.yimg.com/ny/api/res/1.2/_MtOM.DbH.URUqSrXrf6xw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/comingsoon_net_477/8bcc33aecce3f9c7c6b61a56491f6916",
      comment:
        "This resume builder is like a good assistant—way better than Ryan, that's for sure. It’s professional, sleek, and won’t betray you for a corporate job.",
    },
    {
      name: "Tony Stark",
      source: "Stark Industries",
      image:
        "https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg",
      comment:
        "I don’t usually need a resume, but if I did, this builder would make it look as good as one of my suits—sleek, stylish, and a total game-changer.",
    },
    {
      name: "Sheldon Cooper",
      source: "The Big Bang Theory",
      image:
        "https://static.wikia.nocookie.net/tvdatabase/images/2/2d/Sheldon_Cooper.jpg/revision/latest/scale-to-width-down/225?cb=20160901014135",
      comment:
        "I have a highly organized system for job applications, but this resume builder is so efficient, I must say… Bazinga! It meets my strict intellectual standards.",
    },
    {
      name: "Jack Sparrow",
      source: "The Black Pearl",
      image: "",
      comment:
        "A resume, you say? Ah, I usually rely on me charm and a bit of rum, but if I had to use one, this builder would be the map to me next treasure—employment!",
    },
    {
      name: "Shrek",
      source: "The Swamp",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDE2ZjIxYzUtZTJjYS00OWQ0LTk2NGEtMDliYmI3MzMwYjhkXkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg",
      comment:
        "This resume builder is like an onion—layers of professionalism, details, and impressive formatting. Just don’t let Donkey use it. He’d add too many colors.",
    },
    {
      name: "Elon Musk",
      source: "X (formerly Twitter)",
      image:
        "https://www.rollingstone.com/wp-content/uploads/2025/01/elon-musk-treasury.jpg?w=1581&h=1054&crop=1",
      comment:
        "This resume builder is basically AI-powered, disruptive, and a game-changer. Would invest, but only if it includes Dogecoin tips. 🚀",
    },
  ];

  const questions = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      question: "What tools and software do you use for UX design?",
      answer:
        "For UX design, I use Figma, Adobe XD, Sketch for wireframing and prototyping. Photoshop, Illustrator for visuals, Miro, Whimsical for brainstorming, Notion, Trello for workflow, and Hotjar, Google Analytics for user research. Webflow aids in design-to-code transitions, ensuring a seamless user experience.",
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure UX design success using user feedback, usability testing, conversion rates, heatmaps, and A/B testing. Metrics like task completion rate, time on task, bounce rate, and customer satisfaction (CSAT, NPS) help evaluate effectiveness. Analytics tools like Google Analytics and Hotjar provide insights into user behavior and engagement.",
    },
  ];
  return (
    <div className="max-w-screen overflow-hidden flex flex-col justify-center items-center bg-[#010208] syne">
      {/* landing screen */}
      <section className="w-10/12 h-screen flex flex-col justify-center items-center py-[64px]">
        {/* landing text intro */}
        <div className="w-full text-white md:text-[64px] sm:text-[45px] text-[30px] font-extrabold flex flex-col justify-center items-center leading-[80px]">
          <div className="w-full flex flex-wrap justify-center items-center">
            I AM A
            <img
              src={rectangle1}
              className="bg-transparent mx-2"
              alt="rectagle1"
            />
            FREELANCE
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="flex lg:flex-row flex-col justify-center items-center">
              <div className="flex flex-row">
                DESIGNER
                <img
                  src={rectangle2}
                  className="bg-transparent mx-2"
                  alt="rectagle2"
                />
              </div>
              <div className="">FROM</div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center text-center">
            SAN FRANSISCO
          </div>
        </div>

        {/*  landing text intro ends here */}

        <div className="mt-[112px] flex md:flex-row flex-col justify-between items-center">
          <div className="md:w-6/11 md:h-auto h-[100px] w-full flex justify-center items-center">
            <div className="w-1/3 flex justify-center items-center">
              <img src={r1} alt="r1" />
            </div>
            <div className="w-1/3 flex justify-center items-center">
              <img src={r2} alt="r2" />
            </div>
            <div className="w-1/3  flex justify-center items-center ">
              <img src={r3} alt="r3" />
            </div>
          </div>
          <div className="md:w-4/11 w-full text-white sm:text-start text-center">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </div>
        </div>
      </section>
      {/* landing screen ends here */}

      {/* expertise begins here */}
      <section className="w-10/12 flex flex-col justify-center items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-start items-center mb-[32px]">
          <img src={star} className="h-[32px] w-[32px] me-2" alt="star" />
          <div className="text-[40px] font-bold">Expertise</div>
        </div>

        <div className="w-full text-white flex flex-wrap lg:justify-between justify-center items-center">
          {expertise?.map((d, index) => {
            return (
              <div
                key={index}
                className={` lg:w-[48%] md:w-[95%] h-[144px] flex justify-center items-center mb-[64px]`}
              >
                <div className="">
                  {/* heading */}
                  <div className="flex justify-start items-center">
                    <div className="bg-white h-[6.14px] w-[6.14px] me-2"></div>
                    <div className="w-full text-white text-[24px] font-semibold leading-[32px]">
                      {d.title}
                    </div>
                  </div>
                  {/* description */}
                  <div className="w-full">{d.descr}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* expertise ends here */}

      {/*  work section beings here  */}
      <section className="w-10/12 flex flex-col justify-start items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-between items-center mb-[32px]">
          <div className="flex justify-center items-center">
            <img src={star} className="h-[32px] w-[32px] me-2" alt="star" />
            <div className="text-[40px] font-bold">Works</div>
          </div>

          <button
            type="button"
            className="text-white underline font-medium"
            onClick={() => {
              setViewAll(!viewAll);
            }}
          >
            {viewAll ? "View less" : "View all"}
          </button>
        </div>

        {/* body */}
        <div className="w-full flex flex-col justify-center items-center">
          {work?.slice(0, viewAll ? 6 : 3).map((d, index) => {
            return (
              <div
                key={index}
                className="w-full h-auto rounded-2xl overflow-hidden mb-[32px] flex justify-center items-center relative"
              >
                <div className="w-full h-full bg-[#CBCBCB]/50 backdrop-blur-3xl flex lg:flex-row flex-col justify-center items-center p-[32px] relative z-40 rounded-2xl">
                  <div className=" lg:w-[572px] md:min-w-[572px] w-full  h-full flex justify-center items-center lg:me-[32px] ">
                    <img src={d.image} className="w-full h-full" alt="image" />
                  </div>
                  <div className="lg:h-[420px] flex flex-grow-1 flex-col justify-start items-start text-white ">
                    <div className="flex-1 h-full flex flex-col justify-start items-start text-white ">
                      <div className="text-[40px] font-semibold">{d.title}</div>
                      <div className="text-[18px]">{d.descr}</div>
                      <div className="flex h-[60px] justify-start items-center">
                        {d.skills.map((item, idx) => {
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
                      className={`w-full h-full flex justify-start items-start`}
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
            );
          })}
        </div>
      </section>
      {/*  work section ends here  */}

      {/* experience section begins here */}
      <section className="w-10/12 flex flex-col justify-start items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-between items-center mb-[32px]">
          <div className="flex justify-center items-center">
            <img src={star} className="h-[32px] w-[32px] me-2" alt="star" />
            <div className="text-[40px] font-bold">Experience</div>
          </div>
        </div>

        {/* body */}
        <div className="w-full">
          {experience?.map((d, index) => {
            return (
              <div
                key={index}
                className="w-full flex justify-between items-center text-white mb-[32px] border-b-[1.5px] border-white/50 py-2"
              >
                <div className="text-[32px] font-medium leading-[40px]">
                  {d.role}
                </div>
                <div className="flex flex-col justify-center items-end">
                  <div className="text-[24px] font-semibold">{d.Org}</div>
                  <div>
                    {d.from} - {d.to}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* experience section ends here */}

      {/* blog section begins here */}
      <section className="w-10/12 flex flex-col justify-start items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-between items-center mb-[32px]">
          <div className="flex justify-center items-center">
            <img src={star} className="h-[32px] w-[32px] me-2" alt="star" />
            <div className="text-[40px] font-bold">Blog</div>
          </div>

          <button
            type="button"
            className="text-white underline font-medium cursor-pointer"
            onClick={() => {
              setViewAllBlogs(!viewAllBlogs);
            }}
          >
            {viewAllBlogs ? "View less" : "View all"}
          </button>
        </div>

        {/* body */}
        <div className="w-full flex flex-col justify-center items-center">
          {blog.slice(0, viewAllBlogs ? 6 : 3)?.map((d, index) => {
            return (
              <div
                key={index}
                className="w-full mb-[32px] flex md:flex-row flex-col justify-center"
              >
                <div className="md:min-w-[286px] w-full me-[32px]">
                  <img className="w-full" src={d.image} alt="blog-image" />
                </div>
                <div className="flex-grow-1 text-white flex justify-between items-center">
                  <div>
                    <div className="text-[#CBCBCB] text-[18px]">{d.date}</div>
                    <div className="text-[40px] font-semibold md:w-auto w-11/12">
                      {d.title}
                    </div>
                    <div className="h-[50px] flex justify-start items-center">
                      {d.skills?.map((item, idx) => {
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

                  <div className="">
                    <button
                      type="button"
                      className="w-[103px] h-[56px] bg-white text-black rounded-[100px] cursor-pointer"
                      onClick={() => {
                        navigate(`/read-blogs/${index}`);
                      }}
                    >
                      Read
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {viewAllBlogs && (
            <div className="w-full flex justify-end">
              <button
                type="button"
                className="text-white underline font-medium cursor-pointer"
                onClick={() => {
                  setViewAllBlogs(!viewAllBlogs);
                }}
              >
                {viewAllBlogs ? "View less" : "View all"}
              </button>
            </div>
          )}
        </div>
      </section>
      {/* blog section ends here */}

      {/* slider section begins here */}
      <section className="w-10/12 flex flex-col justify-start items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-between items-center mb-[32px]">
          <div className="flex justify-center items-center">
            <img src={star} className="h-[32px] w-[32px] me-2" alt="star" />
            <div className="text-[40px] font-bold">What they say</div>
          </div>
        </div>

        {/* body */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-grow-1 justify-start items-start overflow-hidden">
            {feedbacks.slice(count, count + 1)?.map((d, index) => {
              return (
                <div
                  key={index}
                  className="md:h-[264px] h-auto min-w-[100%] flex md:flex-row flex-col md:justify-between justify-center items-center"
                >
                  <div className="md:w-5/12 w-full h-full flex justify-start items-center md:me-[32px] mb-[32px]">
                    <div className="w-[64px] h-[64px] overflow-hidden rounded-full me-[16px]">
                      <img src={d.image} className="w-full " alt="profile" />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <div className="text-[24px] font-semibold leading-[32px] text-white">
                        {d.name}
                      </div>
                      <div className="text-[#CBCBCB] text-[18px]">
                        {d.source}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-7/12 w-full md:h-full sm:h-[264px] h-[315px] relative flex justify-center items-center">
                    <div className="text-[24px] text-white font-medium relative">
                      {d.comment}
                    </div>
                    <div className="absolute top-0 left-0 md:mt-[10px]">
                      {/* bg-image */}
                      <img src={group} alt="bg-image" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-[32px] flex justify-center items-center">
            <button
              type="button"
              className=" rounded-full bg-[#CBCBCB] w-[40px] h-[40px] cursor-pointer flex justify-center items-center me-[16px]"
              onClick={() => {
                setCount(count === 0 ? 0 : count - 1);
              }}
            >
              <FaArrowLeft color="#000" />
            </button>
            <button
              type="button"
              className="rounded-full bg-[#CBCBCB] w-[40px] h-[40px] cursor-pointer flex justify-center items-center"
              onClick={() => {
                setCount(count === feedbacks.length - 1 ? count : count + 1);
              }}
            >
              <FaArrowRight color="#000" />
            </button>
          </div>
        </div>
      </section>
      {/* slider section ends here */}

      <section className="w-10/12 flex flex-col justify-start items-center py-[64px]">
        {/* heading */}
        <div className="w-full h-[48px] text-white flex justify-between items-center mb-[64px]">
          <div className="flex md:justify-center justify-start md:items-center items-start md:mb-0 mb-[32px]">
            <img src={star} className="h-[32px] w-[32px] md:mt-0 mt-[15px] me-2" alt="star" />
            <div className="text-[40px] font-bold">
              Frequently asked questions
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full flex flex-col justify-center items-center">
          {questions.map((d, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start mb-[32px]"
              >
                <div
                  className="text-[32px] text-white font-medium mb-[8px]"
                  onClick={() => {
                    setActiveAnswer(index);
                  }}
                >
                  {d.question}
                </div>

                {/* poppins */}
                {activeAnswer === index && (
                  <div className="text-[18px] text-[#CBCBCB] poppins">{d.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
