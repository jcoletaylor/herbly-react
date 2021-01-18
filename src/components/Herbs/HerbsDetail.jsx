import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
// import { Link } from 'react-router-dom'

import * as HerbQueries from '../../graphql/HerbQueries'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'

const HerbsDetail = ({ name }) => {
    const { loading, error, data } = useQuery(HerbQueries.SINGLE_HERB_DETAIL, {
        variables: { name },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    const herb = data.herbs[0]
    return (
        <div className="container">
            <section className="hero is-success welcome is-small">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{herb.name}</h1>
                        <h2 className="subtitle">{herb.herb_category.name}</h2>
                    </div>
                </div>
            </section>
            <div className="card list-card">
                <header className="card-header">
                    <p className="card-header-title">Common Names</p>
                </header>
                <div className="card-table">
                    <div className="content">
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
                    </div>
                </div>
                <div className="card-table">
                    <div className="content">
                        <table className="table is-fullwidth is-striped">
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

HerbsDetail.propTypes = {
    name: PropTypes.string.isRequired,
}

export default HerbsDetail
