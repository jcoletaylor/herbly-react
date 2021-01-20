import React from 'react'
import HerbPropTypes from '../HerbPropTypes'
import { Link } from 'react-router-dom'

const HerbComboDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_combination_herbs.map((combo) => (
                    <tr key={combo.id}>
                        <td>
                            <ul style={{ listStyle: 'none' }}>
                                {combo.herb_combination.herb_combination_herbs.map((hch) => (
                                    <li key={hch.id}>
                                        <Link to={`/herbs/${hch.herb.name}`}>
                                            <strong>{hch.herb.name}</strong>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none' }}>
                                {combo.herb_combination.herb_combination_use_cases.map(
                                    (useCase) => (
                                        <li key={useCase.id}>{useCase.use_case}</li>
                                    ),
                                )}
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbComboDetail.propTypes = HerbPropTypes

export default HerbComboDetail
