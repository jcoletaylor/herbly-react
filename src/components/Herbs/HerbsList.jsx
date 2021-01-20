import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import * as HerbQueries from '../../graphql/HerbQueries'
import HerbPropTypes from './HerbPropTypes'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'

import Pagination from '../shared/Pagination'

const HerbPropertySet = ({ propertyType, propertySet }) => {
    return (
        <span>
            <strong style={{ textTransform: 'capitalize' }}>{propertyType}</strong>:{' '}
            {propertySet.join(', ')}.{' '}
        </span>
    )
}

HerbPropertySet.propTypes = {
    propertyType: PropTypes.string.isRequired,
    propertySet: PropTypes.arrayOf(PropTypes.string),
}

const HerbRow = ({ herb }) => {
    const url = `/herbs/${herb.name}`
    const categoryUrl = `/herb_categories/${herb.herb_category.id}`
    const propertyTypes = [...new Set(herb.herb_properties.map((p) => p.herb_property_type.name))]
    const allProperties = propertyTypes.map((pt) => {
        const properties = []
        herb.herb_properties.forEach((p) => {
            if (p.herb_property_type.name === pt) {
                properties.push(p.property.replace(/^\w/, (c) => c.toUpperCase()))
            }
        })
        return properties
    })
    const finalProperties = propertyTypes.map((pt, i) => (
        <HerbPropertySet key={i} propertyType={pt} propertySet={allProperties[i]} />
    ))
    return (
        <tr>
            <td>
                <Link to={url}>{herb.name}</Link>
            </td>
            <td>{herb.pharm_latin}</td>
            <td>{herb.hanzi}</td>
            <td>
                <Link to={categoryUrl}>{herb.herb_category.name}</Link>
            </td>
            <td>{finalProperties}</td>
        </tr>
    )
}

HerbRow.propTypes = HerbPropTypes

const HerbsList = ({ title }) => {
    const [limit] = useState(20)
    const [offset, setOffset] = useState(0)
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
            <div className="card-table-large">
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
            <Pagination
                limit={limit}
                offset={offset}
                total={data.herbs_aggregate.aggregate.count}
                onChange={setOffset}
            />
        </div>
    )
}

HerbsList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HerbsList
