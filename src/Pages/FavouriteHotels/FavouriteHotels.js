import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsFillCupFill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDelete, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/UserContext";
import { ApiContext } from "../../DataContext.js/DataContext";
import Fhotel from "../Fhotel/Fhotel";

const FavouriteHotels = () => {
  const { favouriteHotel } = useContext(ApiContext);
  const { loading } = useContext(AuthContext);

  //   console.log(_id);

  // const handleRemove = (hotelName)=> {
  const handleRemove = (id) => {
    const agree = window.confirm("are you sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/favouritesHotel/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            window.location.reload();
          }
        });
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  // }
  return (
    <div>
      {favouriteHotel.map((FHotel) => (
        <Fhotel
         FHotel={FHotel}
         handleRemove={handleRemove}
        
        ></Fhotel>
      ))}
    </div>
  );
};

export default FavouriteHotels;
