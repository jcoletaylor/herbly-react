import React from 'react'
import PropTypes from 'prop-types'

const RemoteError = ({ error }) => {
    return (
        <div className="container has-text-centered">
            <div className="notification is-danger">{error.toString()}</div>
        </div>
    )
}

RemoteError.propTypes = {
    error: PropTypes.string.isRequired,
}

export default RemoteError
