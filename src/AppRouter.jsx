import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Stats from './pages/Stats'
import HerbsAlpha from './pages/HerbsAlpha'
import SingleHerb from './pages/SingleHerb'
import FormulasAlpha from './pages/FormulasAlpha'
import SingleFormula from './pages/SingleFormula'

import TopNav from './components/TopNav'

const AppRouter = () => {
    return (
        <Router>
            <TopNav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/herbs">
                    <HerbsAlpha />
                </Route>
                <Route path="/herbs/:name">
                    <SingleHerb />
                </Route>
                <Route exact path="/formulas">
                    <FormulasAlpha />
                </Route>
                <Route path="/formulas/:name">
                    <SingleFormula />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/stats">
                    <Stats />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
