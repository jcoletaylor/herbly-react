import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

import HerbsList from '../components/Herbs/HerbsList'

const crumbs = [
    { path: '/', name: 'Home', className: '' },
    { path: '/herbs', name: 'Herbs', className: 'is-active' },
]

const HerbsAlpha = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <div className="content">
                <HerbsList title="Herbs by Alpha" />
            </div>
        </div>
    )
}

export default HerbsAlpha
