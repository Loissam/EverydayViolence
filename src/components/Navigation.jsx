import React from 'react'

import { Nav, NavItem } from 'reactstrap'

import { NavLink } from 'react-router-dom'

const Navigation = ({vertical, className}) => {
    return (
        <Nav vertical={vertical} className={`${className || ""}`}>
            <NavItem>
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/artists">Artists</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/artworks">Artworks</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/extras">Extra Goodies</NavLink>
            </NavItem>
        </Nav>
    )
}

export default Navigation
