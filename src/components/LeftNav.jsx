import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import * as BasicTypes from '../graphql/BasicTypeQueries'
import RemoteError from './shared/RemoteError'
import RemoteLoading from './shared/RemoteLoading'

const LeftNav = () => {
    const { loading, error, data } = useQuery(BasicTypes.ALL_BASIC_TYPES)
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    return (
        <aside className="menu is-hidden-mobile">
            <p className="menu-label">Herbs</p>
            <ul className="menu-list">
                <li>
                    <Link to="/herbs">Herbs by Alpha</Link>
                </li>
                <li>
                    <Link to="/herb_actions">Herb Actions</Link>
                </li>
                <li>
                    <Link to="/herb_categories">Herb Categories</Link>
                </li>
                <li>
                    <Link to="/herb_properties">Herb Properties</Link>
                    <ul>
                        {data.herb_property_types.map((t) => {
                            return (
                                <li key={t.id}>
                                    <Link
                                        to={`/herb_properties/${t.name}`}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {t.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li>
                    <Link to="/herb_warnings">Herb Warnings</Link>
                    <ul>
                        {data.herb_warning_types.map((t) => {
                            return (
                                <li key={t.id}>
                                    <Link
                                        to={`/herb_warnings/${t.name}`}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {t.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            </ul>
            <p className="menu-label">Formulas</p>
            <ul className="menu-list">
                <li>
                    <Link to="/formulas">Formulas by Alpha</Link>
                </li>
                <li>
                    <Link to="/formula_actions">Formula Actions</Link>
                </li>
                <li>
                    <Link to="/conditions">Conditions</Link>
                </li>
                <li>
                    <Link to="/symptoms">Symptoms</Link>
                </li>
                <li>
                    <Link to="/syndromes">Syndromes</Link>
                </li>
            </ul>
        </aside>
    )
}

export default LeftNav
