import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbPropertyDetail = ({ herb }) => {
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
        <tr key={i}>
            <td>
                <strong style={{ textTransform: 'capitalize' }}>{pt}</strong>
            </td>
            <td>{allProperties[i].join(', ')}</td>
        </tr>
    ))
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>{finalProperties}</tbody>
        </table>
    )
}

HerbPropertyDetail.propTypes = HerbPropTypes

export default HerbPropertyDetail
