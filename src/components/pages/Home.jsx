import React from 'react'

import Navigation from '../Navigation'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <NavLink to="/artworks">
            <div className="home-container">
                {/* <img src="/landingpage.png" alt="Home Page" /> */}
                <div className="nav-text">
                    &nbsp;
                </div>
                <p className="home-statement statement">
                    Everyday Violence & Repose emerged from a desire to acknowledge the violence that we all witness every day through the news, at work, at home and in countless other situations. As artists it is not our aim to make definitive statements regarding the issues at hand. It is for us to explore, experiment and respond to what is happening around us; to raise awareness of everyday violence and to seek a point of repose.
                </p>
            </div>
        </NavLink>
    )
}

export default Home
