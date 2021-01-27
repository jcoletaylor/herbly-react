import React from 'react'
import OverviewCounts from '../components/OverviewCounts'
import BreadCrumbs from '../components/BreadCrumbs'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/stats', name: 'Stats', className: 'is-active' },
]

const Stats = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
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
    )
}

export default Stats
