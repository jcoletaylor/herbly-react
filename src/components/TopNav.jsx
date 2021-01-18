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
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <Link to="/herbs" className="navbar-item">
                            Herbs
                        </Link>
                        <Link to="/formulas" className="navbar-item">
                            Formulas
                        </Link>
                        <Link to="/search" className="navbar-item">
                            Search
                        </Link>
                        <Link to="/about" className="navbar-item">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
