import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const NavBar = () => {
    return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/aboutus" activeClassName="active">About us</NavLink>
                <NavLink to="/search" activeClassName="active">search</NavLink>
            </nav>
    );
}

export default NavBar;
