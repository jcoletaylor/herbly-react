import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import * as HerbQueries from '../graphql/HerbQueries'
import RemoteError from './shared/RemoteError'
import RemoteLoading from './shared/RemoteLoading'

const HerbPropertySet = ({ propertyType, propertySet }) => {
    return (
        <span>
            <strong style={{ textTransform: 'capitalize' }}>{propertyType}</strong>: {propertySet}.{' '}
        </span>
    )
}

HerbPropertySet.propTypes = {
    propertyType: PropTypes.string.isRequired,
    propertySet: PropTypes.arrayOf(PropTypes.string),
}

const HerbRow = ({ herb }) => {
    const url = `/herbs/${herb.id}`
    const categoryUrl = `/herb_categories/${herb.herb_category.id}`
    const propertyTypes = [...new Set(herb.herb_properties.map((p) => p.herb_property_type.name))]
    const allProperties = propertyTypes.map((pt) => {
        const properties = []
        herb.herb_properties.forEach((p) => {
            if (p.herb_property_type.name === pt) {
                properties.push(p.property.replace(/^\w/, (c) => c.toUpperCase()))
            }
        })
        return properties.join(', ')
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

HerbRow.propTypes = {
    herb: PropTypes.objectOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pharm_latin: PropTypes.string.isRequired,
        hanzi: PropTypes.string.isRequired,
        herb_category: PropTypes.objectOf({
            name: PropTypes.string.isRequired,
        }),
        herb_properties: PropTypes.arrayOf({
            property: PropTypes.string.isRequired,
            property_type: PropTypes.objectOf({
                name: PropTypes.string.isRequired,
            }),
        }),
    }),
}

const HerbsList = ({ title }) => {
    const { loading, error, data } = useQuery(HerbQueries.LIST_HERBS, {
        variables: { limit: 20, offset: 0 },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-table">
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
        </div>
    )
}

HerbsList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HerbsList
