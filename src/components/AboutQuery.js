import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
query Query($userId: String!) {
  about(id: $userId) {
    id
    name
    description
    image
  }
}
`
export default ({ userId, children }) => (
  <Query query={QUERY} variables={{ userId: userId || false }}>
    {({ loading: loadingAbout, data: { about = {} }, error: errorAbout, refetch: refetchAbout }) =>
      children({ loadingAbout, about, errorAbout, refetchAbout })
    }
  </Query>
)