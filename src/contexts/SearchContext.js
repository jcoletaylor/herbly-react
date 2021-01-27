import { useState, createContext } from 'react'

export const SearchContext = createContext()

export const SearchManager = () => {
    const [search, setSearch] = useState('')
    return { search, setSearch }
}

export default SearchContext
