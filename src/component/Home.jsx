import React, { useState, useEffect } from "react";
import { Timer } from "./Timer"; // Only import Timer
import { AllBlogPosts } from "./AllBlogPost";
import { Carousel } from "./Carousel";
import { Content } from "./Content";
import axios from "axios";

export const Home = () => {
  let [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("https://dev.to/api/articles").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div className="gap-[100px]">
      {/* <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul> */}
      <Carousel />
      <Content />
      <AllBlogPosts />
      {/* <Timer /> */}
    </div>
  );
};
