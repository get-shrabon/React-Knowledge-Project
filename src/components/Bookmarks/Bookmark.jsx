/* eslint-disable react/prop-types */

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="p-3 my-2 bg-white rounded">
      <h3 className="text-1xl font-bold">{title}</h3>
    </div>
  );
};

export default Bookmark;
