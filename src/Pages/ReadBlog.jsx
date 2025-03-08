import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadBlog = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  return <div>ReadBlog</div>;
};

export default ReadBlog;
