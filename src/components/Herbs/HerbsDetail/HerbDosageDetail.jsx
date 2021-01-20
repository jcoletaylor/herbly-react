import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbDosageDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_dosages.map((dose) => (
                    <tr key={dose.id}>
                        <td style={{ textTransform: 'capitalize' }}>
                            <strong>{dose.herb_dosage_type.name}</strong>
                        </td>
                        <td>{dose.dosage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbDosageDetail.propTypes = HerbPropTypes

export default HerbDosageDetail
