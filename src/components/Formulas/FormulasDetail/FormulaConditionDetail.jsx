import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaConditionDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_conditions.map((cndtn, i) => (
                    <tr key={cndtn.id}>
                        <td style={{ textTransform: 'capitalize' }}>{cndtn.condition.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaConditionDetail.propTypes = FormulaPropTypes

export default FormulaConditionDetail
