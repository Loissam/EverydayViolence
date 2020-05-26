import React from 'react'
import Layout from './Layout'

// import Home from './pages/Home'
import Artists from './pages/Artists'
import Artworks from './pages/Artworks'
import Extras from './pages/Extras'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Switcher = () => {
    return (
        <Router>
            <Switch>
                    <Route path="/extras">
                        <Layout>
                            <Extras />
                        </Layout>
                    </Route>
                    <Route path="/artworks">
                        <Layout>
                            <Artworks />
                        </Layout>
                    </Route>
                    <Route path="/artists">
                        <Layout>
                            <Artists />
                        </Layout>
                    </Route>
                    <Route exact path="/">
                        <Layout header={false}>
                            <Artworks />
                        </Layout>
                    </Route>
            </Switch>
        </Router>
    )
}

export default Switcher
