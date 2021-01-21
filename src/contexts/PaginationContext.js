import { useState, createContext } from 'react'

export const PaginationContext = createContext()

export const PaginationManager = () => {
    const [formulasLimit, setFormulasLimit] = useState(20)
    const [herbsLimit, setHerbsLimit] = useState(20)
    const [formulasOffset, setFormulasOffset] = useState(0)
    const [herbsOffset, setHerbsOffset] = useState(0)

    return {
        formulasLimit,
        setFormulasLimit,
        herbsLimit,
        setHerbsLimit,
        formulasOffset,
        setFormulasOffset,
        herbsOffset,
        setHerbsOffset,
    }
}

export default PaginationContext
