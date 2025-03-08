import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const ReadBlog = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const blogData = [
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

  const blog = blogData[index];

  if (!blog) {
    return <div className="text-white text-center">Case Study Not Found</div>;
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#010208]">
      <div className="w-10/12 flex flex-col justify-center items-center">
        <div className="w-full mb-[32px] flex md:flex-row flex-col justify-center">
          <div className="md:w-[286px] w-full me-[32px]">
            <img className="w-full" src={blog.image} alt="blog-image" />
          </div>
          <div className="flex-grow-1 text-white flex justify-between items-center">
            <div>
              <div className="text-[#CBCBCB] text-[18px]">{blog.date}</div>
              <div className="text-[40px] font-semibold md:w-auto w-11/12">
                {blog.title}
              </div>
              <div className="h-[50px] flex justify-start items-center">
                {blog.skills?.map((item, idx) => {
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
        <div className="flex-grow-1 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error, officiis amet id saepe et architecto odit, neque esse pariatur ducimus illum ipsa maiores veritatis. Laboriosam quibusdam, quos tempore, a placeat cupiditate veritatis recusandae animi illum nostrum nihil iusto! Exercitationem rem cum, quos quae, nisi, modi reprehenderit fuga dicta voluptatum ratione eligendi quia nostrum quo vero molestiae odio eaque ipsa fugiat. Natus explicabo, eveniet incidunt minima tenetur officiis mollitia quaerat distinctio exercitationem, deserunt corporis labore fuga ab nam blanditiis laboriosam ex iure accusantium suscipit. Cupiditate aut nesciunt nobis! Similique exercitationem quidem animi, maiores obcaecati iste quae aperiam quod maxime earum omnis reiciendis possimus quisquam quo repellat expedita qui consequuntur vero repellendus eum laudantium dolorum? Maiores ipsa dolores accusantium minima. Ea nisi totam error laboriosam, culpa similique magnam magni, ipsum neque perspiciatis quo dolor necessitatibus iste nostrum velit consequuntur in excepturi enim nam at non? Praesentium, quisquam, mollitia non maxime laboriosam quo nulla sint amet omnis illum accusamus aspernatur vel, facere a saepe corporis quasi repellendus iusto dolorem tempora? Rem natus nulla tempora sint, eius veritatis exercitationem excepturi voluptate corrupti nostrum voluptatem? Quaerat eligendi quo asperiores quae aut voluptas voluptatum, assumenda excepturi officiis beatae illum iusto, debitis nobis ipsum odio sequi?
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
