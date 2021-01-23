import React from 'react'
import PropTypes from 'prop-types'
import HerbPropTypes from '../HerbPropTypes'
import { Link } from 'react-router-dom'

const CombinationLinks = ({ description }) => {
    const links = description.split('+').map((h, i) => (
        <span key={i}>
            <Link to={`/herbs/${h}`}>{h}</Link>{' '}
        </span>
    ))
    return links
}

CombinationLinks.propTypes = {
    description: PropTypes.string.isRequired,
}

const HerbComboDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_combination_herbs.map((combo) => (
                    <>
                        <tr key={`combo-description-${combo.id}`}>
                            <td colSpan={2}>
                                <CombinationLinks
                                    description={combo.herb_combination.description}
                                />
                            </td>
                        </tr>
                        <tr key={combo.id}>
                            <td style={{ width: '50%' }}>
                                <ul style={{ listStyle: 'none' }}>
                                    {combo.herb_combination.herb_combination_use_cases.map(
                                        (useCase) => (
                                            <li key={useCase.id}>{useCase.use_case}</li>
                                        ),
                                    )}
                                </ul>
                            </td>
                            <td>
                                <ul style={{ listStyle: 'none' }}>
                                    {combo.herb_combination.herb_combination_herbs.map((hch) => (
                                        <>
                                            <li key={hch.id}>
                                                <Link to={`/herbs/${hch.herb.name}`}>
                                                    {hch.herb.name} ({hch.herb.hanzi})
                                                </Link>
                                            </li>
                                            <li>{hch.herb.herb_category.name}</li>
                                        </>
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

HerbComboDetail.propTypes = HerbPropTypes

export default HerbComboDetail
