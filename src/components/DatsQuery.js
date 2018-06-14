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
  <Query query={QUERY} fetchPolicy={'cache-and-network'} errorPolicy={'all'}>
    {({ loading: loadingDats, data: { getDats = {} }, error: errorDats }) =>
      children({ loadingDats, getDats, errorDats })
    }
  </Query>
)