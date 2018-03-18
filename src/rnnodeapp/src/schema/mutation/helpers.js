export const postMessage = ({ text }, sbot) => new Promise((resolve, reject) => {
  console.log('publish!!!!', text)
  sbot.publish({
    type: 'post',
    text
  }, (err, msg) => {
    if (err) {
      console.log(err)
      reject(err)
    }
    console.log('MSG', msg)
    const { key, value: { content, sequence, timestamp, author } } = msg
    resolve(msg)
  })
})