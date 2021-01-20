import React from 'react'
import HerbPropTypes from '../HerbPropTypes'

const HerbNoteDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_notes.map((note) => (
                    <tr key={note.id}>
                        <td>{note.note}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbNoteDetail.propTypes = HerbPropTypes

export default HerbNoteDetail
