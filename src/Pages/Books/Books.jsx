import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl mb-5 text-center font-semibold">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-5">
        <Suspense fallback={<h2>Loading....</h2>}>
          {data.map((i) => (
            <Book key={i.bookId} i={i}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
