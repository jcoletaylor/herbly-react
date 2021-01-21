import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import * as FormulaQueries from '../../graphql/FormulaQueries'
import FormulaPropTypes from './FormulaPropTypes'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'
import Pagination from '../shared/Pagination'

import PaginationContext from '../../contexts/PaginationContext'

const FormulaRow = ({ formula }) => {
    const url = `/formulas/${formula.name}`
    return (
        <tr>
            <td>
                <Link to={url}>{formula.name}</Link>
            </td>
            <td>{formula.common_english}</td>
            <td>{formula.hanzi}</td>
            <td>
                <ul style={{ listStyle: 'none' }}>
                    {formula.formula_actions.map((fa) => (
                        <li key={fa.id}>{fa.formula_named_action.name}</li>
                    ))}
                </ul>
            </td>
        </tr>
    )
}

FormulaRow.propTypes = FormulaPropTypes

const FormulasList = ({ title }) => {
    const { formulasLimit, formulasOffset, setFormulasOffset } = useContext(PaginationContext)
    const { loading, error, data } = useQuery(FormulaQueries.LIST_FORMULAS, {
        variables: { limit: formulasLimit, offset: formulasOffset },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-table-large">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <tbody>
                            {data.formulas.map((formula) => (
                                <FormulaRow key={formula.id} formula={formula} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                limit={formulasLimit}
                offset={formulasOffset}
                total={data.formulas_aggregate.aggregate.count}
                onChange={setFormulasOffset}
            />
        </div>
    )
}

FormulasList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default FormulasList
