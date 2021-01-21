import React from 'react'

import { useParams } from 'react-router-dom'

import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'
import FormulasDetail from '../components/Formulas/FormulasDetail'

const SingleFormula = () => {
    const { name } = useParams()
    const crumbs = [
        { path: '/', name: 'Home', className: undefined },
        { path: '/formulas', name: 'Formulas', className: undefined },
        { path: `/formulas/${name}`, name, className: 'is-active' },
    ]
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <FormulasDetail name={name} />
                </div>
            </section>
        </div>
    )
}

export default SingleFormula
