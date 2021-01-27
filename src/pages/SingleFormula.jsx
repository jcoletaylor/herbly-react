import React from 'react'

import { useParams } from 'react-router-dom'

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
            <BreadCrumbs crumbs={crumbs} />
            <FormulasDetail name={name} />
        </div>
    )
}

export default SingleFormula
