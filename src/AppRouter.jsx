import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import HerbsAlpha from './pages/HerbsAlpha'
import FormulasAlpha from './pages/FormulasAlpha'

import TopNav from './components/TopNav'

const AppRouter = () => {
    return (
        <Router>
            <TopNav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/herbs">
                    <HerbsAlpha />
                </Route>
                <Route path="/formulas">
                    <FormulasAlpha />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
