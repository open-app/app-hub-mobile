import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
query Query($userId: String!) {
  profile(id: $userId) {
    name
    imageBlob
  }
}
`
export default ({ userId, children }) => (
  <Query query={QUERY} variables={{ userId }}>
    {({ loading: loadingProfile, data: { profile } }) =>
      children({ loadingProfile, profile })
    }
  </Query>
)