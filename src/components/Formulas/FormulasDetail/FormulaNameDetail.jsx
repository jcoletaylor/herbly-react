import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaNameDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                <tr>
                    <td>
                        <strong>English</strong>
                    </td>
                    <td>{formula.common_english}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Pinyin</strong>
                    </td>
                    <td>{formula.pinyin}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Hanzi</strong>
                    </td>
                    <td>{formula.hanzi}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Also Known As</strong>
                    </td>
                    <td>
                        <ul style={{ listStyle: 'none' }}>
                            {formula.formula_also_knowns.map((fa) => (
                                <li key={fa.id}>{fa.name}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

FormulaNameDetail.propTypes = FormulaPropTypes

export default FormulaNameDetail
