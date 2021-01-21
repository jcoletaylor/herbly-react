import React from 'react'

const HerbContext = React.createContext()

export const HerbProvider = HerbContext.Provider
export const HerbConsumer = HerbContext.Consumer

export default HerbContext
