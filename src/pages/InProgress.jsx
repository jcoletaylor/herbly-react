import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/in_progress', name: 'In Progress', className: 'is-active' },
]

const InProgress = () => {
    return (
        <div className="container">
            <BreadCrumbs crumbs={crumbs} />

            <section className="hero is-success welcome is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">In Progress</h1>
                        <h2 className="subtitle">
                            This page has not been built yet, but is coming soon.
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InProgress
