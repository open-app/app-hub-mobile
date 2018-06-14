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

const PROFILE_QUERY = gql`
query Query($userId: String!) {
  profile(id: $userId) {
    id
    name
    description
  }
}
`

export default ({ userId, children, goBack }) => (
  <Mutation
    mutation={QUERY}
    // update={(cache, { data: publishAbout }) => {
    //   console.log('CACHE', publishAbout)
    //   // const localCache = cache.readQuery({
    //   //   query: PROFILE_QUERY,
    //   //   variables: { userId }
    //   // })
    //   // console.log('*(*', localCache)
    //   cache.writeQuery({
    //     query: PROFILE_QUERY,
    //     variables: { userId },
    //     data: { profile: {
    //       name : publishAbout.aboutMessage.name,
    //       description : publishAbout.aboutMessage.description,
    //       id: `${publishAbout.aboutMessage.__typename}:${publishAbout.userId}`,
    //       __typename: publishAbout.aboutMessage.__typename
    //     }}
    //   })
    // }}
    onCompleted={goBack}
    >
    {(publishAbout, { loading: loadingPublishAbout, error: errorPublishAbout }) => 
      children({ publishAbout, loadingPublishAbout, errorPublishAbout })
    }
  </Mutation>
)