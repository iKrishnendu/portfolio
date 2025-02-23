import React from "react";
import "./BlogSection.css";

import kbytes from "../../assets/image/k-bytes.png";
// Sample blog data
const blogs = [
  {
    id: 1,
    logo: kbytes,
    title: "Blog Title 1",
    description: "This is a short description of blog 1.",
    date: "2024-08-01",
    category: "Tech",
  },
  {
    id: 2,
    logo: kbytes,
    title: "Blog Title 2",
    description: "This is a short description of blog 1.",
    date: "2024-08-01",
    category: "Tech",
  },
  {
    id: 3,
    logo: kbytes,
    title: "Blog Title 3",
    description: "This is a short description of blog 1.",
    date: "2024-08-01",
    category: "Tech",
  },
];

export const BlogSection = () => {
  return (
    <div className="blog-section">
      <h2>0.5 Latest Blogs</h2>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img
              src={blog.logo}
              alt={`${blog.title} logo`}
              className="blog-logo"
            />
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-category">{blog.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
