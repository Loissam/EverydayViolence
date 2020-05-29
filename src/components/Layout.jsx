import React from 'react'

import { Container } from 'reactstrap'

import SideBar from './SideBar'
// import Navigation from './Navigation'

const Layout = ({header, children}) => {
    return (
        <>
            {/* { 
                header !== false
                ?
                    <header className="container-content">
                        <Navigation />
                    </header>
                :
                    <></>
            } */}
            <Container fluid={true} className="full-height p-0 m-0">
                <div className="container-row">
                    <SideBar className="side-bar-left" />
                    <div className="container-content pl-2 pr-2">
                        {children}
                    </div>
                    <SideBar className="side-bar-right" />
                </div>
            </Container>
        </>
    )
}

export default Layout