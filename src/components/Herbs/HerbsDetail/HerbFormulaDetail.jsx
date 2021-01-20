import React from 'react'
import HerbPropTypes from '../HerbPropTypes'
import { Link } from 'react-router-dom'

const HerbFormulaDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.formula_herbs.map((fh) => (
                    <tr key={fh.id}>
                        <td>
                            <strong>
                                <Link to={`/formulas/${fh.formula.name}`}>{fh.formula.name}</Link>
                            </strong>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <strong>Pinyin</strong> {fh.formula.pinyin}
                                </li>
                                <li>
                                    <strong>Hanzi</strong> {fh.formula.hanzi}
                                </li>

                                <li>
                                    <strong>English</strong> {fh.formula.english}
                                </li>
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbFormulaDetail.propTypes = HerbPropTypes

export default HerbFormulaDetail
