import Dat from 'dat-node'
import { reject } from 'async';

// syncDat: syncs dat from hash
// setStoragePath: sets dats storage path on fs

export const getDat = (datHash) => new Promise((resolve, reject) => {
  Dat('/joe/cat-pic-analysis', (err, dat) => {
    if (err) console.log('Error on Dat', err)
    dat.importFiles()
    dat.joinNetwork()
    console.log('My Dat link is: dat://', dat.key.toString('hex'))
  })
})

export const asd = () => new Promise((resolve, reject) => {
  Dat('/download/cat-analysis', {
    // 2. Tell Dat what link I want
    key: '<dat-key>' // (a 64 character hash from above)
  }, (err, dat) => {
    if (err) console.log(err)
  
    // 3. Join the network & download (files are automatically downloaded)
    dat.joinNetwork()
  })
})

// Dat('/my-dir', {key: '<key>'}, (err, dat) => {
//   dat.joinNetwork((err) => {
//     if (err) console.log(err)

//     // After the first round of network checks, the callback is called
//     // If no one is online, you can exit and let the user know.
//     if (!dat.network.connected || !dat.network.connecting) {
//       console.error('No users currently online for that key.')
//       // process.exit(1)
//     }
//   })
// })


// // download on demand
// Dat('/my-dir', {key: '<key>', sparse: true}, function (err, dat) {
//   dat.joinNetwork()

//   // Manually download files via the hyperdrive API:
//   dat.archive.readFile('/cat-locations.txt', function (err, content) {
//     console.log(content) // prints cat-locations.txt file!
//   })
// })

// // import
// Dat('/my-data', function (err, dat) {
//   if (err) throw err

//   var progress = dat.importFiles({watch: true}) // with watch: true, there is no callback
//   progress.on('put', function (src, dest) {
//     console.log('Importing ', src.name, ' into archive')
//   })
