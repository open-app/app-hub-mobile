import React from 'react'
import { Subscription } from 'react-apollo'
import { gql } from 'apollo-boost'

const SUBSCRIPTION = gql`
subscription Subscription {
  progress {
    rate
    feeds
    incompleteFeeds
    progress
    total
  }
}
`
export default ({ children }) => (
  <Subscription
    subscription={SUBSCRIPTION}
    shouldResubscribe={true}
  >
    {({ loading: loadingProgress, data: dataProgress, error: errorProgress }) =>
      children({ loadingProgress, dataProgress, errorProgress })
    }
  </Subscription>
)