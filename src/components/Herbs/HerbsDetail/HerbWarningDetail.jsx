import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbWarningDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_warnings.map((warn) => (
                    <tr key={warn.id}>
                        <td style={{ textTransform: 'capitalize' }}>
                            <strong>{warn.herb_warning_type.name}</strong>
                        </td>
                        <td>{warn.warning}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbWarningDetail.propTypes = HerbPropTypes

export default HerbWarningDetail
