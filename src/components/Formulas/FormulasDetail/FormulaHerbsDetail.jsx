import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'
import { Link } from 'react-router-dom'

const FormulaHerbsDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_herbs.map((formulaHerb) => (
                    <>
                        <tr key={formulaHerb.id}>
                            <td>
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <strong>
                                            <Link to={`/herbs/${formulaHerb.herb.name}`}>
                                                {formulaHerb.herb.name}
                                            </Link>
                                        </strong>
                                    </li>
                                    <li>
                                        <strong>{formulaHerb.herb.herb_category.name}</strong>
                                    </li>
                                    <li>{formulaHerb.herb.hanzi}</li>
                                    <li>{formulaHerb.herb.common_english}</li>
                                </ul>
                            </td>
                            <td>
                                <ul style={{ listStyle: 'none' }}>
                                    {formulaHerb.formula_herb_actions.map((act, i) => (
                                        <li key={act.id}>{act.formula_named_action.name}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}

FormulaHerbsDetail.propTypes = FormulaPropTypes

export default FormulaHerbsDetail
