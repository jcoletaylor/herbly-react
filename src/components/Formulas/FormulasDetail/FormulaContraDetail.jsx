import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaContraDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_contraindications.map((contra, i) => (
                    <tr key={contra.id}>
                        <td style={{ textTransform: 'capitalize' }}>{contra.contraindication}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaContraDetail.propTypes = FormulaPropTypes

export default FormulaContraDetail
