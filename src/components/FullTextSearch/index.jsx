import React, { useContext } from 'react'
import FullTextSearchForm from './FullTextSearchForm'
import FullTextSearchResultTable from './FullTextSearchResultTable'
import SearchContext from '../../contexts/SearchContext'
import PaginationContext from '../../contexts/PaginationContext'

const conditionallyRenderResults = ({ search }) => {
    if (search && search.toString().trim().length > 3) {
        return <FullTextSearchResultTable title="Search Results" search={search} />
    }
}

const FullTextSearch = () => {
    const {
        search: { setOffset },
    } = useContext(PaginationContext)
    const { search, setSearch } = useContext(SearchContext)
    const handleReset = (args) => {
        setSearch('')
        setOffset(0)
    }
    return (
        <>
            <FullTextSearchForm
                handleReset={handleReset}
                handleSubmit={(args) => setSearch(args.search)}
                search={search}
            />
            {conditionallyRenderResults({ search })}
        </>
    )
}

export default FullTextSearch
