import React from 'react'

import { useParams } from 'react-router-dom'

import BreadCrumbs from '../components/BreadCrumbs'
import HerbsDetail from '../components/Herbs/HerbsDetail'

const SingleHerb = () => {
    const { name } = useParams()
    const crumbs = [
        { path: '/', name: 'Home', className: undefined },
        { path: '/herbs', name: 'Herbs', className: undefined },
        { path: `/herbs/${name}`, name, className: 'is-active' },
    ]
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <div className="content">
                <HerbsDetail name={name} />
            </div>
        </div>
    )
}

export default SingleHerb
