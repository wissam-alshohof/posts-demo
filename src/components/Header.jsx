import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/header.css'

function Header(props) {
    return (
        <div className='header'>
            <ul>
                <NavLink to="/" style={{textDecoration:"none"}}  
                className={({ isActive, isPending }) => isActive ? "active" : ""}><li> Home </li></NavLink>
                <NavLink to="/posts"  style={{textDecoration:"none"}} 
                className={({ isActive, isPending }) => isActive ? "active" : ""}><li> Posts </li></NavLink>
            </ul>
        </div>
    );
}

export default Header;