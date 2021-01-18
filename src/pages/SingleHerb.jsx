import React from 'react'

import { useParams } from 'react-router-dom'

import LeftNav from '../components/LeftNav'
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
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <HerbsDetail name={name} />
                </div>
            </section>
        </div>
    )
}

export default SingleHerb
