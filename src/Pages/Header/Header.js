import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <a href="https://ibb.co/jVjKdJZ"><img src="https://i.ibb.co/RhJn1j4/Rectangle-31.png" alt="Rectangle-31" border="0"></a> */}
            <section className='header-section'>
                <Navbar></Navbar>
            </section>
            this is  header
        </div>
    );
};

export default Header;