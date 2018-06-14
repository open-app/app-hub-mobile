import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  query Query {
    whoami
  }
`

export default ({ children }) => (
  <Query query={QUERY}>
    {({ loading: loadingWhoami, data: { whoami }, error: errorWhoami }) =>
      children({ loadingWhoami, whoami, errorWhoami })
    }
  </Query>
)