import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

import * as GQueries from '../../../graphql/HerbActionTypeQueries'
import RemoteError from '../../shared/RemoteError'
import RemoteLoading from '../../shared/RemoteLoading'

import HerbActionTypeRow from './HerbActionTypeRow'
import Pagination from '../../shared/Pagination'
import PaginationContext from '../../../contexts/PaginationContext'

const HerbActionsList = ({ title }) => {
    const {
        herb_actions: { limit, offset, setOffset },
    } = useContext(PaginationContext)
    const { loading, error, data } = useQuery(GQueries.LIST_HERB_ACTION_TYPES, {
        variables: { limit, offset },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-table-large card-content">
                <div className="content">
                    <table className="table is-fullwidth is-striped">
                        <tbody>
                            {data.herb_action_types.map((herbActionType) => (
                                <HerbActionTypeRow
                                    key={herbActionType.id}
                                    herbActionType={herbActionType}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item">
                    <Pagination
                        limit={limit}
                        offset={offset}
                        total={data.herb_action_types_aggregate.aggregate.count}
                        onChange={setOffset}
                    />
                </div>
            </footer>
        </div>
    )
}

HerbActionsList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HerbActionsList
