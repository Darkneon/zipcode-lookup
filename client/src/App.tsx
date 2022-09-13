import React from 'react';
import config from './data/config';
import HomePage from './pages/HomePage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: config.graphQLUrl,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <HomePage />
        </ApolloProvider>
    );
}

export default App;
