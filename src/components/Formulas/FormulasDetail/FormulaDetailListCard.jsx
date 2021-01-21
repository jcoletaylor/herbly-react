import React from 'react'
import PropTypes from 'prop-types'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaDetailListCard = ({ title, component, formula }) => {
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-table">
                <div className="content">{component({ formula })}</div>
            </div>
        </div>
    )
}

FormulaDetailListCard.propTypes = {
    title: PropTypes.string.isRequired,
    component: PropTypes.oneOfType(React.Component),
    formula: PropTypes.shape(FormulaPropTypes),
}

export default FormulaDetailListCard
