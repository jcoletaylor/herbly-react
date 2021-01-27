import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const SearchSchema = Yup.object().shape({
    search: Yup.string().min(3, 'Too short').max(100, 'Too long').required('Required'),
})

const FullTextSearchForm = ({ handleSubmit, handleReset, search }) => {
    const formik = useFormik({
        initialValues: {
            search,
        },
        validationSchema: SearchSchema,
        onSubmit: handleSubmit,
        onReset: handleReset,
    })
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Herb and Formula Search</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <form>
                        <div className="field">
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-large"
                                    name="search"
                                    type="text"
                                    placeholder="Search by Name, Action, Category, Symptom, etc"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.search}
                                />
                                {formik.touched.search && formik.errors.search ? (
                                    <div className="is-error">{formik.errors.search}</div>
                                ) : null}
                                <span className="icon is-medium is-left">
                                    <i className="fa fa-search"></i>
                                </span>
                                <span className="icon is-medium is-right">
                                    <i className="fa fa-check"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button onClick={formik.handleSubmit} className="button is-link">
                                    Search
                                </button>
                            </div>
                            <div className="control">
                                <button
                                    onClick={formik.handleReset}
                                    className="button is-link is-light"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

FullTextSearchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    search: PropTypes.string,
}

export default FullTextSearchForm
