import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
query Query($blobHash: String!) {
  blob(hash: $blobHash) {
    id
    hex
    path
  }
}
`
export default ({ hash, children }) => (
  <Query query={QUERY} variables={{ blobHash: hash }}>
    {({ loading: loadingBlob, data: dataBlob, error: errorBlob, refetch: refetchBlob }) =>
      children({ loadingBlob, dataBlob, errorBlob, refetchBlob })
    }
  </Query>
)