import { postMessage } from '../ssb/message/helpers';

export default {
  postMessage: (_, { input: { text } }, { sbot }) => {
    postMessage({ text }, sbot)
  },
}
