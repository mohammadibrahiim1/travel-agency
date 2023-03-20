import { createBrowserRouter } from "react-router-dom";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddPaymentMethod from "../Pages/AddPaymentMethod/AddPaymentMethod";
import AllFlights from "../Pages/AllFlights/AllFlights";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
// import DisplayPackage from "../Pages/DisplayPackage/DisplayPackage";
import Facilities from "../Pages/Facilities/Facilities";
import Favourites from "../Pages/Favourites/Favourites";
import FindFlights from "../Pages/FindFlights/FindFlights";
import FindHotel from "../Pages/FindHotels/FindHotel";
import HotelDetails from "../Pages/FindHotels/HotelDetails/HotelDetails";
import HotelListing from "../Pages/FindHotels/HotelListing/HotelListing";
import SearchResult from "../Pages/FindHotels/SearchResult/SearchResult";
// import FindStays from "../Pages/FindHotels/FindStays";
import FlightDetails from "../Pages/FlightDetails/FlightDetails";
// import FlightListing from "../Pages/FlightListing/FlightListing";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import PackagesDetails from "../Pages/PackageDetails/PackagesDetails";
import Packages from "../Pages/Packages/Packages";
import SetPassword from "../Pages/SetPassword/SetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import VerifyAccount from "../Pages/VerifyAccount/VerifyAccount";
// import PrivateRoutes from './PrivateRoutes'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/findFlights",
        element: <FindFlights></FindFlights>,
      },
      {
        path: "/allFlights",
        element: <AllFlights></AllFlights>,
      },
      {
        path: "/flightDetails",
        element: <FlightDetails></FlightDetails>,
      },
      {
        path: "/findHotels",
        element: <FindHotel></FindHotel>,
      },
      {
        path: "/hotel-listing",
        element: <HotelListing></HotelListing>,
      },
      {
        path: "/category/:id",
        element: <HotelDetails></HotelDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/category/search",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/verify",
        element: <VerifyAccount></VerifyAccount>,
      },
      {
        path: "/setpassword",
        element: <SetPassword></SetPassword>,
      },
      {
        path: "/addpaymentmethod",
        element: <AddPaymentMethod></AddPaymentMethod>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/facilities",
        element: <Facilities></Facilities>,
      },

      {
        path: "/tourGuide/:id",
        element: <GuideDetails></GuideDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/tourGuide/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },

      {
        path: "/packages/:id",
        element: <PackagesDetails></PackagesDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/bookingdetails/:id",
        element: <BookingDetails></BookingDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/paymentcard/:id",
        element: <PaymentCard></PaymentCard>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
    ],
  },

  // {
  //   path: "/flightListing",
  //   element: <FlightListing></FlightListing>,
  //   children: [
  //     {
  //       path: "/flightListing",
  //       element: <AllFlights></AllFlights>,
  //     },
  //     {
  //       path: "/flightListing/allFlights",
  //       element: <AllFlights></AllFlights>,
  //     },
  //     {
  //       path: "/flightListing/signin",
  //       element: <SignIn></SignIn>,
  //     },
  //   ],
  // },
]);
