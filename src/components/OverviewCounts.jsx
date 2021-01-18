import React from 'react'
import { useQuery } from '@apollo/client'

import * as Counts from '../graphql/CountQueries'
import RemoteError from './shared/RemoteError'
import RemoteLoading from './shared/RemoteLoading'

const OverviewCounts = () => {
    const { loading, error, data } = useQuery(Counts.OVERVIEW_COUNTS)
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{data.herbs_aggregate.aggregate.count}</p>
                        <p className="subtitle">Total Herbs</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{data.herb_categories_aggregate.aggregate.count}</p>
                        <p className="subtitle">Herb Categories</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{data.formulas_aggregate.aggregate.count}</p>
                        <p className="subtitle">Total Formulas</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">{data.formula_actions_aggregate.aggregate.count}</p>
                        <p className="subtitle">Formula Actions</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default OverviewCounts
