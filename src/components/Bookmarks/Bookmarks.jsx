/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmark, markTime }) => {
  return (
    <div className="md:w-1/3">
      <h1 className="text-2xl border-2 rounded bg-[#f3f3f3] border-[#6047EC] text-center p-3 font-bold text-[#6047EC]">
        Spent time on read : {markTime} min
      </h1>
      <div className="mt-5 bg-[#f3f3f3] p-5 rounded">
        <h3 className="font-bold text-2xl">
          Bookmarked Blogs : <span>{bookmark.length}</span>
        </h3>
        {bookmark.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.proptypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmarks;
