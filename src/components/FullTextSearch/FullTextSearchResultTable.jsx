import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

import * as Queries from '../../graphql/SearchQueries'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'

import FullTextSearchResultRow from './FullTextSearchResultRow'
import Pagination from '../shared/Pagination'
import PaginationContext from '../../contexts/PaginationContext'

const FullTextSearchResultTable = ({ title, search }) => {
    const {
        search: { limit, offset, setOffset },
    } = useContext(PaginationContext)
    const { loading, error, data } = useQuery(Queries.FULL_TEXT_SEARCH, {
        variables: { search, limit, offset },
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
                            {data.full_search.map((result, i) => (
                                <FullTextSearchResultRow key={i} result={result} />
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
                        total={data.full_search_aggregate.aggregate.count}
                        onChange={setOffset}
                    />
                </div>
            </footer>
        </div>
    )
}

FullTextSearchResultTable.propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.string,
}

export default FullTextSearchResultTable
