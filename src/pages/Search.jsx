import React from 'react'
import LeftNav from '../components/LeftNav'
import BreadCrumbs from '../components/BreadCrumbs'
import FullTextSearch from '../components/FullTextSearch'

const crumbs = [
    { path: '/', name: 'Home', className: undefined },
    { path: '/search', name: 'Search', className: 'is-active' },
]

const Search = () => {
    return (
        <div className="container">
            <section className="columns">
                <div className="column is-2">
                    <LeftNav />
                </div>
                <div className="column is-10">
                    <BreadCrumbs crumbs={crumbs} />
                    <FullTextSearch />
                </div>
            </section>
        </div>
    )
}

export default Search
