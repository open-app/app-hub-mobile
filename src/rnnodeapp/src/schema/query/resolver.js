import { getHistory } from '../ssb/message/helpers';
import { getId, getProfile } from '../ssb/user/helpers';

export default {
  history: (_, { id, sequence }, { sbot }) => getHistory({ id, sequence }, sbot),
  profile: (_, { id }, { sbot }) => getProfile({ id }, sbot),
  whoami: (_, obj, { sbot }) => getId(sbot),
}
