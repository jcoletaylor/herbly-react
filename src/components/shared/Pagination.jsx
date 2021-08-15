import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ limit, offset, total, onChange }) => {
    const lastPage = Math.round(total / limit)
    let currentPage = 1
    if (offset >= limit) {
        currentPage = Math.round(offset / limit) + 1
    }
    let previousPage = currentPage - 1
    if (previousPage < 1) {
        previousPage = undefined
    }
    let nextPage = currentPage + 1
    if (nextPage >= lastPage) {
        nextPage = undefined
    }
    const handleOnChange = (page) => {
        return () => {
            onChange(limit * (page - 1))
        }
    }
    let previousLi
    if (previousPage) {
        previousLi = (
            <li>
                <a
                    className="pagination-link"
                    aria-label={`Goto page ${previousPage}`}
                    onClick={handleOnChange(previousPage)}
                >
                    {previousPage}
                </a>
            </li>
        )
    }
    let nextLi
    if (nextPage) {
        nextLi = (
            <li>
                <a
                    className="pagination-link"
                    aria-label={`Goto page ${nextPage}`}
                    onClick={handleOnChange(nextPage)}
                >
                    {nextPage}
                </a>
            </li>
        )
    }
    let firstLi
    if (currentPage !== 1 && currentPage - 2 > 1) {
        firstLi = (
            <>
                <li>
                    <a
                        className="pagination-link"
                        aria-label="Goto page 1"
                        onClick={handleOnChange(1)}
                    >
                        1
                    </a>
                </li>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
            </>
        )
    }

    let lastLi
    if (lastPage !== currentPage && currentPage < lastPage) {
        lastLi = (
            <>
                <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a
                        className="pagination-link"
                        aria-label={`Goto page ${lastPage}`}
                        onClick={handleOnChange(lastPage)}
                    >
                        {lastPage}
                    </a>
                </li>
            </>
        )
    }
    let previousButton
    if (previousPage) {
        previousButton = (
            <li>
                <a className="pagination-previous" onClick={handleOnChange(previousPage)}>
                    Previous
                </a>
            </li>
        )
    }
    let nextButton
    if (nextPage) {
        nextButton = (
            <li>
                <a className="pagination-next" onClick={handleOnChange(nextPage)}>
                    Next
                </a>
            </li>
        )
    }

    return (
        <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
            <ul style={{ listStyle: 'none' }} className="pagination-list">
                {previousButton}
                {firstLi}
                {previousLi}
                <li>
                    <a
                        className="pagination-link is-current"
                        aria-label={`Page ${currentPage}`}
                        aria-current="page"
                    >
                        {currentPage}
                    </a>
                </li>
                {nextLi}
                {lastLi}
                {nextButton}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Pagination
