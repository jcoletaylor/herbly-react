import React from 'react'
import Hero from '../components/Hero'
import FullTextSearch from '../components/FullTextSearch'

const Home = () => {
    return (
        <div className="container">
            <Hero />
            <div className="content">
                <FullTextSearch />
            </div>
        </div>
    )
}

export default Home
