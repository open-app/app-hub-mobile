export const listApplications = (sbot) => new Promise((resolve, reject) => {
  console.log('SBOT', sbot)
  sbot.communityApps.get((err, view) => {
    if (err) reject(err)
    resolve(Object.values(view)) 
  })
})