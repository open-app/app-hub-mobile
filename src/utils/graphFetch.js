export default (uri, query) => new Promise((resolve, reject) => {
  const body = JSON.stringify({ query: query })
  fetch(uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => {
      console.log('Error on fetch', err)
      reject(err)
    })
  
})


