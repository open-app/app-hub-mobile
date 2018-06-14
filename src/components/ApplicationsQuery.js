import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  query Query {
    getApplications {
      name
      author
      appUrl
      datHash
      repository
      description
    }
  }
`

export default ({ children }) => (
  <Query query={QUERY} fetchPolicy={'cache-and-network'} errorPolicy={'all'}>
    {({ loading: loadingApplications, data: { getApplications = {} }, error: errorApplications, refetch, startPolling, stopPolling }) =>
      children({ loadingApplications, getApplications, errorApplications, refetch, startPolling, stopPolling })
    }
  </Query>
)