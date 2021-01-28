import React from 'react'
import OverviewCounts from '../components/OverviewCounts'
import BreadCrumbs from '../components/BreadCrumbs'
import Hero from '../components/Hero'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/stats', name: 'Stats', className: 'is-active' },
]

const Stats = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <div className="content">
                <Hero
                    title="Herbly Stats"
                    subtitle="Some counts and totals about what the Herbly API has to offer"
                />
                <OverviewCounts />
            </div>
        </div>
    )
}

export default Stats
