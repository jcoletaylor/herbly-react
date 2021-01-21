import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaSyndromeDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_syndromes.map((syndrome, i) => (
                    <tr key={syndrome.id}>
                        <td style={{ textTransform: 'capitalize' }}>{syndrome.syndrome.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaSyndromeDetail.propTypes = FormulaPropTypes

export default FormulaSyndromeDetail
