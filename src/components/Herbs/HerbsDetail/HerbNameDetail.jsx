import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbNameDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                <tr>
                    <td>
                        <strong>English</strong>
                    </td>
                    <td>{herb.common_english}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Pinyin</strong>
                    </td>
                    <td>{herb.pinyin}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Latin</strong>
                    </td>
                    <td>{herb.latin}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Pharm Latin</strong>
                    </td>
                    <td>{herb.pharm_latin}</td>
                </tr>
                <tr>
                    <td>
                        <strong>Hanzi</strong>
                    </td>
                    <td>{herb.hanzi}</td>
                </tr>
            </tbody>
        </table>
    )
}

HerbNameDetail.propTypes = HerbPropTypes

export default HerbNameDetail
