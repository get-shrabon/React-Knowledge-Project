/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmark, handleMarkTime }) => {
  const {
    cover_image,
    author_name,
    author_image,
    title,
    read_time,
    hashtags,
    upload_date,
    id,
  } = blog;
  return (
    <div className="card">
      <img className="rounded" src={cover_image} alt="" />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img className="author__img" src={author_image} alt="" />
            <div>
              <h4 className="font-bold text-2xl">{author_name}</h4>
              <p>
                <small className="">{upload_date}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p>{read_time} min read</p>
          <button onClick={() => handleBookmark(blog)}>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-3">
        <a href="#">{hashtags[0]}</a>
        <a href="#">{hashtags[1]}</a>
      </div>
      <button
        onClick={() => handleMarkTime(id,read_time)}
        className="underline text-lime-500 hover:no-underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propType = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
