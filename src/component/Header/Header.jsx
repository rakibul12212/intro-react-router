import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            {/* 'a' tag dile load hoy tei react e amra 'Link' use korbo r 'href' er jay gay 'to' likhbo */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;