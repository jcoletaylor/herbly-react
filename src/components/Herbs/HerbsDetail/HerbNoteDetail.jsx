import React from 'react'
import HerbPropTypes from '../HerbPropTypes'
import { Link } from 'react-router-dom'

const replaceNoteWithLink = (note) => {
    const noteArr = note.split(/\#{(\w+)}/)
    const elements = noteArr.map((n, i) => {
        if (i % 2 === 0) {
            return <span>{n}</span>
        } else {
            return <Link to={`/herbs/${n}`}>{n}</Link>
        }
    })
    return elements
}

const HerbNoteDetail = ({ herb }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {herb.herb_notes.map((note) => (
                    <tr key={note.id}>
                        <td>{replaceNoteWithLink(note.note)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

HerbNoteDetail.propTypes = HerbPropTypes

export default HerbNoteDetail
