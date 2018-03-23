import { getHistory } from '../ssb/message/helpers';
import { getId, getProfile } from '../ssb/user/helpers';
import { getConnectedPeers } from '../ssb/gossip/helpers';
import { listApplications } from '../open-app/helpers'

export default {
  connectedPeers: (_, {}, { sbot }) => {
    return getConnectedPeers(sbot)
      .then(res => res)
  },
  listApplications: (_, { sortBy }, { sbot }) => listApplications(sbot),
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}
