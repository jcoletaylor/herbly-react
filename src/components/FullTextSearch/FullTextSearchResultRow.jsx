import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const FullTextSearchResultRow = ({ result }) => {
    let url = '/'
    switch (result.searchable_type) {
        case 'Herb':
            url = `/herbs/${result.name}`
            break
        case 'Formula':
            url = `/formulas/${result.name}`
            break
        default:
            url = '#'
            break
    }
    return (
        <tr>
            <td>
                <strong>
                    <Link to={url}>{result.name}</Link>
                </strong>
            </td>
            <td>{result.searchable_type}</td>
            <td>{result.common_english}</td>
        </tr>
    )
}

FullTextSearchResultRow.propTypes = {
    result: PropTypes.shape({
        name: PropTypes.string.isRequired,
        common_english: PropTypes.string.isRequired,
        searchable_id: PropTypes.number.isRequired,
        searchable_type: PropTypes.string.isRequired,
    }),
}

export default FullTextSearchResultRow
