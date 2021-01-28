import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

import * as HerbQueries from '../../../graphql/HerbQueries'
import RemoteError from '../../shared/RemoteError'
import RemoteLoading from '../../shared/RemoteLoading'

import HerbRow from './HerbRow'
import Pagination from '../../shared/Pagination'
import PaginationContext from '../../../contexts/PaginationContext'

const HerbsList = ({ title }) => {
    const {
        herbs: { limit, offset, setOffset },
    } = useContext(PaginationContext)
    const { loading, error, data } = useQuery(HerbQueries.LIST_HERBS, {
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
                            {data.herbs.map((herb) => (
                                <HerbRow key={herb.id} herb={herb} />
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
                        total={data.herbs_aggregate.aggregate.count}
                        onChange={setOffset}
                    />
                </div>
            </footer>
        </div>
    )
}

HerbsList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HerbsList
