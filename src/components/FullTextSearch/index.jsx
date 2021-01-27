import React, { useContext } from 'react'
import FullTextSearchForm from './FullTextSearchForm'
import FullTextSearchResultTable from './FullTextSearchResultTable'
import SearchContext from '../../contexts/SearchContext'

const conditionallyRenderResults = ({ search }) => {
    if (search && search.toString().trim().length > 3) {
        return <FullTextSearchResultTable title="Search Results" search={search} />
    }
}

const FullTextSearch = () => {
    const { search, setSearch } = useContext(SearchContext)
    return (
        <>
            <FullTextSearchForm
                handleReset={(args) => setSearch('')}
                handleSubmit={(args) => setSearch(args.search)}
                search={search}
            />
            {conditionallyRenderResults({ search })}
        </>
    )
}

export default FullTextSearch
