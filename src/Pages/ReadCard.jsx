import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
const ReadCard = ({ i }) => {
  // console.log(i)
  const {
    bookName,
    tags,
    image,
    author,
    bookId,
    category,
    rating,
    yearOfPublishing,
  } = i;

  return (
    <div>
      <div className="card bg-base-100  shadow-sm flex flex-cols md:flex-row">
        <figure className="bg-gray-100 w-1/3 mx-auto mt-5 mr-10">
          <img className="p-4 rounded-xl h-[266px] " src={image} alt="Shoes" />
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
    </div>
  );
};

export default ReadCard;
