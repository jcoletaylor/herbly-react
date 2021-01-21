import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaInteractionDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_interactions.map((action, i) => (
                    <tr key={action.id}>
                        <td style={{ textTransform: 'capitalize' }}>{action.interaction}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaInteractionDetail.propTypes = FormulaPropTypes

export default FormulaInteractionDetail
