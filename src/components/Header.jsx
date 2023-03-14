import React from 'react';
import '../assets/header.css'

function Header(props) {
    return (
        <div className='header'>
            <ul>
                <li>Home</li>
                <li>posts</li>
            </ul>
        </div>
    );
}

export default Header;