import DefaultMessage from '../default/resolver';

export default {
  ...DefaultMessage,
  text: (msg) => msg.value.content.text,
  author: (msg) => msg.value.author
}
