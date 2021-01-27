import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import AppRouter from './AppRouter'
import * as C from './Constants'
import './App.css'

import PaginationContext, { PaginationManager } from './contexts/PaginationContext'
import SearchContext, { SearchManager } from './contexts/SearchContext'

const client = new ApolloClient({
    uri: C.GRAPHQL_URL,
    cache: new InMemoryCache(),
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <PaginationContext.Provider value={PaginationManager()}>
                <SearchContext.Provider value={SearchManager()}>
                    <AppRouter />
                </SearchContext.Provider>
            </PaginationContext.Provider>
        </ApolloProvider>
    )
}

export default App
