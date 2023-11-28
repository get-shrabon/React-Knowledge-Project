import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [markTime, setMarkTime] = useState(0);
  const handleBookmark = (blog) => {
    const newBook = [...bookmark, blog];
    setBookmark(newBook);
  };

  const handleMarkTime = (time) => {
    const newTime = markTime + time;
    setMarkTime(newTime);
  };
  return (
    <>
      <Header></Header>
      <div className="container flex mx-auto gap-5">
        <Blogs
          handleMarkTime={handleMarkTime}
          handleBookmark={handleBookmark}
        ></Blogs>
        <Bookmarks markTime={markTime} bookmark={bookmark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
