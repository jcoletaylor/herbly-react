import { useState, createContext } from 'react'

export const PaginationContext = createContext()

export const PaginationComponent = () => {
    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0)
    return { limit, offset, setLimit, setOffset }
}

export const PaginationManager = () => {
    const paginationSets = ['herbs', 'formulas']
    const managed = {}
    paginationSets.map((set) => {
        managed[set] = PaginationComponent()
    })
    return managed
}

export default PaginationContext
