const AboutMessage =  require('./ssb/message/about/type');
const Channel =  require('./ssb/channel/type');
const ChannelMessage =  require('./ssb/message/channel/type');
const ContactMessage =  require('./ssb/message/contact/type');
const DefaultMessage =  require('./ssb/message/default/type');
const Message =  require('./ssb/message/type');
const PostMessage =  require('./ssb/message/post/type');
const User =  require('./ssb/user/type');
const Query =  require('./query/type');
const Mutation = require('./mutation/type');
const Subscription =  require('./subscription/type');

const Schema = `
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default [
  AboutMessage,
  Channel,
  ChannelMessage,
  ContactMessage,
  DefaultMessage,
  Message,
  PostMessage,
  User,
  Query,
  Schema,
  Mutation,
  Subscription,
]
