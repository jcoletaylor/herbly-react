import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import HerbPropTypes from '../HerbPropTypes'

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

export default HerbRow
