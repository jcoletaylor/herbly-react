import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'
import { Link } from 'react-router-dom'

const FormulaModsDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_modification_sets.map((set, i) => (
                    <>
                        <tr key={set.id}>
                            <td colSpan={2} style={{ textTransform: 'capitalize' }}>
                                <strong>{set.purpose}</strong>
                            </td>
                        </tr>
                        {set.formula_modifications.map((mod) => (
                            <tr key={mod.id}>
                                <td>
                                    <Link to={`/herbs/${mod.herb.name}`}>{mod.herb.name}</Link>
                                </td>
                                <td>{mod.modification}</td>
                            </tr>
                        ))}
                    </>
                ))}
            </tbody>
        </table>
    )
}

FormulaModsDetail.propTypes = FormulaPropTypes

export default FormulaModsDetail
