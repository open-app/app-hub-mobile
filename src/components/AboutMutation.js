import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  mutation Mutation($userId: String!, $newName: String, $newDescription: String) {
    aboutMessage(id: $userId, input: { name: $newName, description: $newDescription }) {
      id
      name
      description
    }
  }
`

export default ({ children, goBack }) => (
  <Mutation
    mutation={QUERY}
    onCompleted={goBack}
    >
    {(publishAbout, { loading: loadingPublishAbout, error: errorPublishAbout }) => 
      children({ publishAbout, loadingPublishAbout, errorPublishAbout })
    }
  </Mutation>
)