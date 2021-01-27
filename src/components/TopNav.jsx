import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className="navbar is-white">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item brand-text">
                        Herbly.app
                    </Link>
                    <a
                        onClick={() => {
                            setIsActive(!isActive)
                        }}
                        role="button"
                        aria-label="menu"
                        aria-expanded="false"
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                        data-target="navMenu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link to="/herbs" className="navbar-link">
                                Herbs
                            </Link>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/herb">
                                    Herbs by Alpha
                                </Link>
                                <Link className="navbar-item" to="/herb_actions">
                                    Herb Actions
                                </Link>
                                <Link className="navbar-item" to="/herb_categories">
                                    Herb Categories
                                </Link>
                                <Link className="navbar-item" to="/herb_properties">
                                    Herb Properties
                                </Link>
                                <Link className="navbar-item" to="/herb_warnings">
                                    Herb Warnings
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <Link to="/formulas" className="navbar-link">
                                Formulas
                            </Link>
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" to="/formulas">
                                    Formulas by Alpha
                                </Link>
                                <Link className="navbar-item" to="/formula_actions">
                                    Formula Actions
                                </Link>
                                <Link className="navbar-item" to="/conditions">
                                    Conditions
                                </Link>
                                <Link className="navbar-item" to="/symptoms">
                                    Symptoms
                                </Link>
                                <Link className="navbar-item" to="/syndromes">
                                    Syndromes
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link to="/stats" className="navbar-item">
                                Stats
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="/about" className="navbar-item">
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
