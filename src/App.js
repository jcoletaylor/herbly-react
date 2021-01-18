import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import AppRouter from './AppRouter'
import * as C from './Constants'
import './App.css'

const client = new ApolloClient({
    uri: C.GRAPHQL_URL,
    cache: new InMemoryCache(),
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <AppRouter />
        </ApolloProvider>
    )
}

export default App
