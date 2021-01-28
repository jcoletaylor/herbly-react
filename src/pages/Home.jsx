import React from 'react'
import Hero from '../components/Hero'
import FullTextSearch from '../components/FullTextSearch'

const Home = () => {
    return (
        <div className="container">
            <Hero
                title="Herbly.app"
                subtitle="Designed to help search and explore TCM herbs and formulas"
            />
            <div className="content">
                <FullTextSearch />
            </div>
        </div>
    )
}

export default Home
