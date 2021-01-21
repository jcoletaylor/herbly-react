import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaActionDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_actions.map((action, i) => (
                    <tr key={action.id}>
                        <td style={{ textTransform: 'capitalize' }}>
                            {action.formula_named_action.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaActionDetail.propTypes = FormulaPropTypes

export default FormulaActionDetail
