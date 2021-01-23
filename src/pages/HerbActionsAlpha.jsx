import React from 'react'
import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'

import HerbActionsList from '../components/HerbActions/HerbActionsList'

const crumbs = [
    { path: '/', name: 'Home', className: '' },
    { path: '/herb_actions', name: 'Herb Actions', className: 'is-active' },
]

const HerbActionsAlpha = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <HerbActionsList title="Herb Actions by Alpha" />
                </div>
            </section>
        </div>
    )
}

export default HerbActionsAlpha
