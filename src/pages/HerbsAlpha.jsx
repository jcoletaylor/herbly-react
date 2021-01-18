import React from 'react'
import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'

import HerbsList from '../components/Herbs/HerbsList'

const crumbs = [
    { path: '/', name: 'Home', className: '' },
    { path: '/herbs', name: 'Herbs', className: 'is-active' },
]

const HerbsAlpha = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <HerbsList title="Herbs by Alpha" />
                </div>
            </section>
        </div>
    )
}

export default HerbsAlpha
