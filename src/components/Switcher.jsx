import React from 'react'
import Layout from './Layout'

import Home from './pages/Home'
// eslint-disable-next-lineimport Artists from './pages/Artists'
import Artworks from './pages/Artworks'
// eslint-disable-next-lineimport Extras from './pages/Extras'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Switcher = () => {
    return (
        <Router>
            <Switch>
                    <Route path="/artworks">
                        <Layout>
                            <Artworks />
                        </Layout>
                    </Route>
                    <Route exact path="/">
                        <Layout header={false}>
                            <Home />
                        </Layout>
                    </Route>
            </Switch>
        </Router>
    )
}

export default Switcher
