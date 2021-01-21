import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import AppRouter from './AppRouter'
import * as C from './Constants'
import './App.css'

import PaginationContext, { PaginationManager } from './contexts/PaginationContext'

const client = new ApolloClient({
    uri: C.GRAPHQL_URL,
    cache: new InMemoryCache(),
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <PaginationContext.Provider value={PaginationManager()}>
                <AppRouter />
            </PaginationContext.Provider>
        </ApolloProvider>
    )
}

export default App
