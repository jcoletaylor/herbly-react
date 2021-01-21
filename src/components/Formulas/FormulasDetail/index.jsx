import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'

import * as FormulaQueries from '../../../graphql/FormulaQueries'
import RemoteError from '../../shared/RemoteError'
import RemoteLoading from '../../shared/RemoteLoading'
import FormulaDetailListCard from './FormulaDetailListCard'
import FormulaNameDetail from './FormulaNameDetail'
import FormulaActionDetail from './FormulaActionDetail'

const FormulasDetail = ({ name }) => {
    const { loading, error, data } = useQuery(FormulaQueries.SINGLE_FORMULA_DETAIL, {
        variables: { name },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    const formula = data.formulas[0]
    if (!formula) {
        return <RemoteError error="No herb found" />
    }
    return (
        <div className="container">
            <section className="hero is-success welcome is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{formula.name}</h1>
                        <h2 className="subtitle">{formula.common_english}</h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="columns">
                    <div className="column is-6">
                        <FormulaDetailListCard
                            title="Common Names"
                            formula={formula}
                            component={FormulaNameDetail}
                        />
                    </div>
                    <div className="column is-6">
                        <FormulaDetailListCard
                            title="Formula Actions"
                            formula={formula}
                            component={FormulaActionDetail}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

FormulasDetail.propTypes = {
    name: PropTypes.string.isRequired,
}

export default FormulasDetail
