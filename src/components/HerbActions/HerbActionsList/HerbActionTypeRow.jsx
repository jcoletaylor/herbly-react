import React from 'react'
import { Link } from 'react-router-dom'

import HerbActionTypePropTypes from '../HerbActionTypePropTypes'

const HerbActionTypeRow = ({ herbActionType }) => {
    return (
        <tr>
            <td>
                <strong>{herbActionType.name}</strong>
            </td>
            <td>
                {herbActionType.herb_actions.map((ha) => (
                    <ul key={ha.id} style={{ listStyle: 'none' }}>
                        <li>
                            <Link to={`/herbs/${ha.herb.name}`}>
                                {ha.herb.name} ({ha.herb.hanzi})
                            </Link>
                        </li>
                        <li>{ha.herb.herb_category.name}</li>
                    </ul>
                ))}
            </td>
        </tr>
    )
}

HerbActionTypeRow.propTypes = HerbActionTypePropTypes

export default HerbActionTypeRow
