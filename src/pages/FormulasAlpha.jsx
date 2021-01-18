import React from 'react'
import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/formulas', name: 'Formulas', className: 'is-active' },
]

const FormulasAlpha = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <h2>Welcome to Formulas</h2>
                </div>
            </section>
        </div>
    )
}

export default FormulasAlpha
