import { postMessage } from './helpers';

export default {
  postMessage: (_, { input: { text } }, { sbot }) => {
    postMessage({ text }, sbot)
  },
}
