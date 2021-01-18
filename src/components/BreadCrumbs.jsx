import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Crumb = ({ crumb }) => {
    return (
        <li className={crumb.className}>
            <Link to={crumb.path}>{crumb.name}</Link>
        </li>
    )
}

const BreadCrumbs = ({ crumbs }) => {
    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                {crumbs.map((crumb) => (
                    <Crumb key={crumb.path} crumb={crumb} />
                ))}
            </ul>
        </nav>
    )
}

Crumb.propTypes = {
    crumb: PropTypes.objectOf({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
    }),
}

BreadCrumbs.propTypes = {
    crumbs: PropTypes.array.isRequired,
}

export default BreadCrumbs
