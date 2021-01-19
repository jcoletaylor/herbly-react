import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import * as HerbQueries from '../../graphql/HerbQueries'
import RemoteError from '../shared/RemoteError'
import RemoteLoading from '../shared/RemoteLoading'
import HerbPropertyRows from './HerbPropertyRows'

const HerbsDetail = ({ name }) => {
    const { loading, error, data } = useQuery(HerbQueries.SINGLE_HERB_DETAIL, {
        variables: { name },
    })
    if (loading) return <RemoteLoading />
    if (error) return <RemoteError error={error} />
    const herb = data.herbs[0]
    if (!herb) {
        return <RemoteError error="No herb found" />
    }
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
            <section className="section">
                <div className="columns">
                    <div className="column is-6">
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
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Herb Actions</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.herb_actions.map((action, i) => (
                                                <>
                                                    <tr key={action.id}>
                                                        <td style={{ textTransform: 'capitalize' }}>
                                                            <strong>
                                                                {action.herb_action_type.name}
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                    {action.herb_action_annotations.map(
                                                        (annotation) => (
                                                            <tr key={annotation.id}>
                                                                <td>{annotation.annotation}</td>
                                                            </tr>
                                                        ),
                                                    )}
                                                    {action.herb_action_indications.map(
                                                        (indication) => (
                                                            <tr key={indication.id}>
                                                                <td>{indication.indication}</td>
                                                            </tr>
                                                        ),
                                                    )}
                                                </>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Herb Combinations</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.herb_combination_herbs.map((combo) => (
                                                <tr key={combo.id}>
                                                    <td>
                                                        <ul style={{ listStyle: 'none' }}>
                                                            {combo.herb_combination.herb_combination_herbs.map(
                                                                (hch) => (
                                                                    <li key={hch.id}>
                                                                        <Link
                                                                            to={`/herbs/${hch.herb.name}`}
                                                                        >
                                                                            <strong>
                                                                                {hch.herb.name}
                                                                            </strong>
                                                                        </Link>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul style={{ listStyle: 'none' }}>
                                                            {combo.herb_combination.herb_combination_use_cases.map(
                                                                (useCase) => (
                                                                    <li key={useCase.id}>
                                                                        {useCase.use_case}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Dosages</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.herb_dosages.map((dose) => (
                                                <tr key={dose.id}>
                                                    <td style={{ textTransform: 'capitalize' }}>
                                                        <strong>
                                                            {dose.herb_dosage_type.name}
                                                        </strong>
                                                    </td>
                                                    <td>{dose.dosage}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Herb Properties</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            <HerbPropertyRows herb={herb} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Herb Warnings</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.herb_warnings.map((warn) => (
                                                <tr key={warn.id}>
                                                    <td style={{ textTransform: 'capitalize' }}>
                                                        <strong>
                                                            {warn.herb_warning_type.name}
                                                        </strong>
                                                    </td>
                                                    <td>{warn.warning}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Formulas</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.formula_herbs.map((fh) => (
                                                <tr key={fh.id}>
                                                    <td>
                                                        <strong>
                                                            <Link
                                                                to={`/formulas/${fh.formula.name}`}
                                                            >
                                                                {fh.formula.name}
                                                            </Link>
                                                        </strong>
                                                    </td>
                                                    <td>
                                                        {fh.formula.english}, {fh.formula.pinyin},{' '}
                                                        {fh.formula.hanzi}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card list-card">
                            <header className="card-header">
                                <p className="card-header-title">Herb Notes</p>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-fullwidth is-striped">
                                        <tbody>
                                            {herb.herb_notes.map((note) => (
                                                <tr key={note.id}>
                                                    <td>{note.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

HerbsDetail.propTypes = {
    name: PropTypes.string.isRequired,
}

export default HerbsDetail
