import React from 'react'
import FormulaPropTypes from '../FormulaPropTypes'

const FormulaManifestationDetail = ({ formula }) => {
    return (
        <table className="table is-fullwidth is-striped">
            <tbody>
                {formula.formula_manifestations.map((manifest) => (
                    <>
                        <tr key={`manifest-tongue-${manifest.id}`}>
                            <td>
                                <strong>Tongue</strong>
                            </td>
                            <td>{manifest.tongue}</td>
                        </tr>
                        <tr key={`manifest-tongue-coat-${manifest.id}`}>
                            <td>
                                <strong>Tongue Coat</strong>
                            </td>
                            <td>{manifest.tongue_coat}</td>
                        </tr>
                        <tr key={`manifest-pulse-${manifest.id}`}>
                            <td>
                                <strong>Pulse</strong>
                            </td>
                            <td>{manifest.pulse}</td>
                        </tr>
                        <tr key={`manifest-symtpoms-${manifest.id}`}>
                            <td>
                                <strong>Symptoms</strong>
                            </td>
                            <td>
                                <ul style={{ listStyle: 'none' }}>
                                    {manifest.formula_manifestation_symptoms.map((symptom) => (
                                        <li key={symptom.id}>{symptom.symptom.name}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}

FormulaManifestationDetail.propTypes = FormulaPropTypes

export default FormulaManifestationDetail
