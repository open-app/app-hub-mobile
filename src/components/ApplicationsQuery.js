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
  <Query query={QUERY}>
    {({ loading: loadingApplications, data: { getApplications }, refetch, startPolling, stopPolling }) =>
      children({ loadingApplications, getApplications, refetch, startPolling, stopPolling })
    }
  </Query>
)