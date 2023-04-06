import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            {/* 'a' tag dile load hoy tei react e amra 'Link' use korbo r 'href' er jay gay 'to' likhbo */}
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            {/* [''/""]evave to dile to er value ta fixed */}
        </nav>
    );
};

export default Header;