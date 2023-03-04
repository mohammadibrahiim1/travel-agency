import React from 'react';
import { FaPlane,FaBed} from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

<nav class="navbar d-lg-block d-none  navbar-expand-lg pt-3 ">
  <div class="container">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/findFlights">< FaPlane className='me-1'/>Find Flights</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/findStays"> < FaBed/> Find Stay  </Link>
        </li>

        </ul>
 
 {/* <a to="https://ibb.co/LCS62m5"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="Logo" border="0"></a> */}

 <div className='navbar-nav m-auto mb-2 mb-lg-0'>  <Link class="navbar-brand" to="#"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" /></Link></div>

        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        <li class="nav-item">
          <Link class="nav-link">Login</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link">Sign up</Link>
        </li>
      </ul>

    
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


{/* offcanvas navbar */}



<nav class="navbar d-lg-none d-xl-none  fixed-top">
  <div class="container">
    <Link  class="navbar-brand" to="#"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" /></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="#">< FaPlane className='me-1'/>Find Flights</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#"> < FaBed/> Find Stay  </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link">Login</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link sign-up-button ">Sign up</Link>
        </li>
          {/* <li class="nav-item dropdown">
            <Link  class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
        
          </li>
          <li class="nav-item dropdown">
            <Link  class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
        
          </li>
          <li class="nav-item dropdown">
            <Link  class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
        
          </li> */}
        </ul>
        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>



        </div>
    );
};

export default Navbar;