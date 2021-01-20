import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbActionDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_actions.map((action, i) => (
                    <>
                        <tr key={action.id}>
                            <td style={{ textTransform: 'capitalize' }}>
                                <strong>{action.herb_action_type.name}</strong>
                            </td>
                        </tr>
                        {action.herb_action_annotations.map((annotation) => (
                            <tr key={annotation.id}>
                                <td>{annotation.annotation}</td>
                            </tr>
                        ))}
                        {action.herb_action_indications.map((indication) => (
                            <tr key={indication.id}>
                                <td>{indication.indication}</td>
                            </tr>
                        ))}
                    </>
                ))}
            </tbody>
        </table>
    )
}

HerbActionDetail.propTypes = HerbPropTypes

export default HerbActionDetail
