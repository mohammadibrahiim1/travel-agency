import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const AddReviews = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "unregisterd";
    const email = user?.email || "unregister";
    const photoURL = user?.photoURL;
    const text = form.message.value;
    console.log(name, photoURL, text,email);

    const addreview = {
      name,
      photoURL,
      text,
      email,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addreview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("added review successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="w-50 m-auto shadow mt-5">
        <p className="text-danger">add a review</p>
        <form onSubmit={handleAddReview}>
          {/* <div>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="m-2 "
            />

            <input
              type="photoURL"
              name="photoURL"
              placeholder="enter your tour photo url"
            />
          </div> */}

          <textarea
            name="message"
            id=""
            cols="50"
             rows="2"
            className="w-30"
            placeholder="write a review about our service"
          ></textarea>

          <div>
            <input
              className="btn btn-danger m-2"
              type="submit"
              value="add a review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
