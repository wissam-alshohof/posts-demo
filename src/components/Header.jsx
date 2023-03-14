import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/header.css'

function Header(props) {
    return (
        <div className='header'>
            <ul>
                <Link to="/" style={{textDecoration:"none"}} ><li> Home </li></Link>
                <Link to="/posts"  style={{textDecoration:"none"}}><li> Posts </li></Link>
            </ul>
        </div>
    );
}

export default Header;