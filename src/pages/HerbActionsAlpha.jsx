import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

import HerbActionsList from '../components/HerbActions/HerbActionsList'

const crumbs = [
    { path: '/', name: 'Home', className: '' },
    { path: '/herb_actions', name: 'Herb Actions', className: 'is-active' },
]

const HerbActionsAlpha = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <div className="content">
                <HerbActionsList title="Herb Actions by Alpha" />
            </div>
        </div>
    )
}

export default HerbActionsAlpha
