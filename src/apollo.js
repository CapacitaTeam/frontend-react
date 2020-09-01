import React from 'react'
import httpProvider from 'axios'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { buildAxiosFetch } from '@lifeomic/axios-fetch'
import interceptor from './authService/httpInterceptor'
import API from './actions/apiUrl'
import { InMemoryCache } from 'apollo-boost'

interceptor.registerInterceptor()

const client = new ApolloClient({
    uri: API.graphql,
    fetch: buildAxiosFetch(httpProvider),
    cache: new InMemoryCache({ addTypename: false })
})

export const client2 = new ApolloClient({
    uri: API.graphql2,
    fetch: buildAxiosFetch(httpProvider),
    cache: new InMemoryCache({ addTypename: false })
})

const Apollo = props => {
    const attr = {
        client,
        ...props
    }

    return <ApolloProvider {...attr} />
}

export default Apollo
