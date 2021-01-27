import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Stats from './pages/Stats'
import HerbsAlpha from './pages/HerbsAlpha'
import SingleHerb from './pages/SingleHerb'
import FormulasAlpha from './pages/FormulasAlpha'
import SingleFormula from './pages/SingleFormula'
import HerbActionsAlpha from './pages/HerbActionsAlpha'

import InProgress from './pages/InProgress'

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
                <Route exact path="/herb_actions">
                    <HerbActionsAlpha />
                </Route>
                <Route exact path="/herb_categories">
                    <InProgress />
                </Route>
                <Route exact path="/herb_properties">
                    <InProgress />
                </Route>
                <Route path="/herb_properties/:kind">
                    <InProgress />
                </Route>
                <Route exact path="/herb_warnings">
                    <InProgress />
                </Route>
                <Route path="/herb_warnings/:kind">
                    <InProgress />
                </Route>
                <Route exact path="/formulas">
                    <FormulasAlpha />
                </Route>
                <Route path="/formulas/:name">
                    <SingleFormula />
                </Route>
                <Route exact path="/formula_actions">
                    <InProgress />
                </Route>
                <Route path="/formula_actions/:kind">
                    <InProgress />
                </Route>
                <Route exact path="/conditions">
                    <InProgress />
                </Route>
                <Route path="/conditions/:kind">
                    <InProgress />
                </Route>
                <Route exact path="/symptoms">
                    <InProgress />
                </Route>
                <Route path="/symptoms/:kind">
                    <InProgress />
                </Route>
                <Route exact path="/syndromes">
                    <InProgress />
                </Route>
                <Route path="/syndromes/:kind">
                    <InProgress />
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
