import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";
const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleBook = data.find((book) => book.bookId === parseInt(id));
  console.log(singleBook)
  const {
    bookName,
    tags,
    image,
    author,
    bookId,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    review
  } = singleBook;

  // console.log(id)
  // console.log(data)
  return (
    <div className="hero bg-base-200 min-h-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="w-sm rounded-lg shadow-2xl mr-7"
        />
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <h1 className="text-lg border-b-1 border-dotted pb-2 font-semibold">By : {author}</h1>
          <h1>{category}</h1>
          <p className="py-6">
            <span className="font-bold text-md">Review : </span>
            {review}
          </p>
          <div className="flex gap-5 mb-5 border-b-1 border-dotted pb-2">
            <p className="font-bold text-md">Tag : </p>
            <button className="bg-green-200 py-1 px-2 font-semibold rounded">{tags[0]}</button>
            <button className="bg-green-200 py-1 px-2 font-semibold rounded">{tags[1]}</button>
          </div>
          <p>Number of Pages : <span className="font-bold text-md">{totalPages}</span></p>
          <p>Publisher : <span className="font-bold text-md">{publisher}</span></p>
          <p>Year of Publishing : <span className="font-bold text-md">{yearOfPublishing}</span></p>
          <button className="btn ">Read</button>
          <button className="btn btn-primary">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
