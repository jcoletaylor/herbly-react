import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaNotesDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_notes.map((note, i) => (
                    <tr key={note.id}>
                        <td style={{ textTransform: 'capitalize' }}>{note.note}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

FormulaNotesDetail.propTypes = FormulaPropTypes

export default FormulaNotesDetail
