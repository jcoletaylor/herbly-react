import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'

import * as HerbQueries from '../../../graphql/HerbQueries'
import RemoteError from '../../shared/RemoteError'
import RemoteLoading from '../../shared/RemoteLoading'
import HerbPropertyDetail from './HerbPropertyDetail'
import HerbDetailListCard from './HerbDetailListCard'
import HerbNameDetail from './HerbNameDetail'
import HerbActionDetail from './HerbActionDetail'
import HerbComboDetail from './HerbComboDetail'
import HerbDosageDetail from './HerbDosageDetail'
import HerbWarningDetail from './HerbWarningDetail'
import HerbFormulaDetail from './HerbFormulaDetail'
import HerbNoteDetail from './HerbNoteDetail'

const HerbsDetail = ({ name }) => {
    const { loading, error, data } = useQuery(HerbQueries.SINGLE_HERB_DETAIL, {
        variables: { name },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    const herb = data.herbs[0]
    if (!herb) {
        return <RemoteError error="No herb found" />
    }
    return (
        <div className="container">
            <section className="hero is-success welcome is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{herb.name}</h1>
                        <h2 className="subtitle">{herb.herb_category.name}</h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-6">
                        <HerbDetailListCard
                            title="Common Names"
                            herb={herb}
                            component={HerbNameDetail}
                        />
                        <HerbDetailListCard
                            title="Herb Actions"
                            herb={herb}
                            component={HerbActionDetail}
                        />
                        <HerbDetailListCard
                            title="Herb Combinations"
                            herb={herb}
                            component={HerbComboDetail}
                        />
                    </div>
                    <div className="column is-6">
                        <HerbDetailListCard
                            title="Dosages"
                            herb={herb}
                            component={HerbDosageDetail}
                        />
                        <HerbDetailListCard
                            title="Herb Properties"
                            herb={herb}
                            component={HerbPropertyDetail}
                        />
                        <HerbDetailListCard
                            title="Herb Warnings"
                            herb={herb}
                            component={HerbWarningDetail}
                        />
                        <HerbDetailListCard
                            title="Found in Formulas"
                            herb={herb}
                            component={HerbFormulaDetail}
                        />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12">
                        <HerbDetailListCard title="Notes" herb={herb} component={HerbNoteDetail} />
                    </div>
                </div>
            </section>
        </div>
    )
}

HerbsDetail.propTypes = {
    name: PropTypes.string.isRequired,
}

export default HerbsDetail
