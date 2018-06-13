import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  query Query {
    getDats {
      name
    }
  }
`

export default ({ children }) => (
  <Query query={QUERY}>
    {({ loading: loadingDats, data: { getDats } }) =>
      children({ loadingDats, getDats })
    }
  </Query>
)