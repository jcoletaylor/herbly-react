import React from 'react'
import { useQuery } from '@apollo/client'

import * as Counts from '../../graphql/CountQueries'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'
import OverviewCountTile from './OverviewCountTile'

const OverviewCounts = () => {
    const { loading, error, data } = useQuery(Counts.OVERVIEW_COUNTS)
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <section className="info-tiles">
            <div className="tile is-ancestor has-text-centered">
                <OverviewCountTile
                    title="Total Herbs"
                    count={data.herbs_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Herb Categories"
                    count={data.herb_categories_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Herb Properties"
                    count={data.herb_properties_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Herb Action Types"
                    count={data.herb_action_types_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Herb Warning Types"
                    count={data.herb_warnings_aggregate.aggregate.count}
                />
            </div>
            <div className="tile is-ancestor has-text-centered">
                <OverviewCountTile
                    title="Total Formulas"
                    count={data.formulas_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Formula Actions"
                    count={data.formula_named_actions_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Formula Syndromes"
                    count={data.syndromes_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Formula Symptoms"
                    count={data.symptoms_aggregate.aggregate.count}
                />
                <OverviewCountTile
                    title="Formula Conditions"
                    count={data.conditions_aggregate.aggregate.count}
                />
            </div>
        </section>
    )
}

export default OverviewCounts
