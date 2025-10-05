import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ i }) => {
  // console.log(i);
  const { bookName, tags, image, author,bookId, category, rating, yearOfPublishing } =
    i;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      {" "}
      <div className="card bg-base-100  shadow-sm">
        <figure className="bg-gray-100 w-5/6 mx-auto mt-5">
          <img className="p-4 rounded-xl h-[166px] " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-between">
            <div className="badge badge-outline font-bold text-green-500">
              {tags[0]}
            </div>
            <div className="badge badge-outline font-bold text-green-500">
              {tags[1]}
            </div>
          </div>
          <h2 className="card-title my-2 text-xl font-semibold">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="text-sm font-semibold">By : {author}</p>
          <div className="flex justify-between items-center">
            <h1>Category : {category}</h1>
            <div className="flex justify-between items-center gap-1 text-md">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
