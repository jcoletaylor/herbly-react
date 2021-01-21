import React from 'react'
import LeftNav from '../components/LeftNav'
import OverviewCounts from '../components/OverviewCounts'

const Stats = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <section className="hero is-info welcome is-small">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">Herbly Stats</h1>
                                <h2 className="subtitle">
                                    Some counts and totals about what the Herbly API has to offer
                                </h2>
                            </div>
                        </div>
                    </section>
                    <OverviewCounts />
                </div>
            </section>
        </div>
    )
}

export default Stats
