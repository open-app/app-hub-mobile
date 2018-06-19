import React from 'react'
import { Subscription } from 'react-apollo'
import { gql } from 'apollo-boost'

const SUBSCRIPTION = gql`
  subscription Subscription {
  gossip {
    type
    peer {
      host
      port
      key
      source
      announcers
      stateChange
      failure
      client
    }
  }
}
`

export default ({ connected, children }) => (
  <Subscription
    subscription={SUBSCRIPTION}
    shouldResubscribe={true}
  >
    {({ loading: loadingGossip, data: dataGossip, error: errorGossip }) =>
      children({ loadingGossip, dataGossip, errorGossip })
    }
  </Subscription>
)