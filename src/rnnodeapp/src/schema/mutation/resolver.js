import { publishMessage } from '../ssb/message/helpers';

export default {
  postMessage: (_, { input: { text } }, { sbot }) => publishMessage({ type: 'post', text }, sbot),
  aboutMessage: (_, { input}, { sbot }) => {
    const { id, name, description } = input
    return publishMessage({
      type: 'about',
      about: id,
      name,
      description
    }, sbot)
  },
}
