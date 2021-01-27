import React from 'react'
import PropTypes from 'prop-types'

const OverviewCountTile = ({ title, count }) => {
    return (
        <div className="tile is-parent">
            <article className="tile is-child box">
                <p className="title">{count}</p>
                <p className="subtitle">{title}</p>
            </article>
        </div>
    )
}

OverviewCountTile.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}

export default OverviewCountTile
