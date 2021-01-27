import { useState, createContext } from 'react'

export const PaginationContext = createContext()

export const PaginationComponent = () => {
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    return { limit, offset, setLimit, setOffset }
}

export const PaginationManager = () => {
    const paginationSets = [
        'herbs',
        'herb_actions',
        'herb_categories',
        'herb_properties',
        'herb_warnings',
        'formulas',
        'formula_actions',
        'conditions',
        'symptoms',
        'syndromes',
        'search',
    ]
    const managed = {}
    paginationSets.map((set) => {
        managed[set] = PaginationComponent()
    })
    return managed
}

export default PaginationContext
