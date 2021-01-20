import React from 'react'
import PropTypes from 'prop-types'
import HerbPropTypes from '../HerbPropTypes'

const HerbDetailListCard = ({ title, component, herb }) => {
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-table">
                <div className="content">{component({ herb })}</div>
            </div>
        </div>
    )
}

HerbDetailListCard.propTypes = {
    title: PropTypes.string.isRequired,
    component: PropTypes.oneOfType(React.Component),
    herb: PropTypes.shape(HerbPropTypes),
}

export default HerbDetailListCard
