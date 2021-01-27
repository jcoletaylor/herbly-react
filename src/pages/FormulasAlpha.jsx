import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

import FormulasList from '../components/Formulas/FormulasList'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/formulas', name: 'Formulas', className: 'is-active' },
]

const FormulasAlpha = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />
            <FormulasList title="Formulas by Alpha" />
        </div>
    )
}

export default FormulasAlpha
