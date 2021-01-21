import React from 'react'
import LeftNav from '../components/LeftNav'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <Hero />
                </div>
            </section>
        </div>
    )
}

export default Home
