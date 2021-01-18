import React from 'react'

const FullTextSearch = () => {
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Herb and Formula Search</p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input is-large"
                            type="text"
                            placeholder="Pinyin, English, or Latin"
                        />
                        <span className="icon is-medium is-left">
                            <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullTextSearch
