import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../../DataContext.js/DataContext";
// import { useLoaderData } from "react-router-dom";

const BookingInfo = () => {
  const { bookInfo } = useContext(ApiContext);
  console.log(bookInfo);
  // const { packageName,contact,userName,totalPrice, } = bookInfo;
  return (
    <div>
      <section>
        {bookInfo.map((book) => (
          <>
            <div
              class="card text-bg-success mb-3"
              style={{ "max-width": "18rem" }}
            >
              <div class="card-header"> {book.packageName} </div>
              <div class="card-body">
                <h5 class="card-title">{book.userName}</h5>
                <p class="card-text">{book.contact}</p>
              </div>
              <Link to={`/paymentcard/${book._id}`} className="btn btn-warning">make payment</Link>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default BookingInfo;
