import RNFS from 'react-native-fs'

export default (datHash) => new Promise((resolve, reject) => {
  const src = `${RNFS.DocumentDirectoryPath}/dat/${datHash}`
  RNFS.readFile(`${src}/metadata.json`, 'utf8')
    .then(contents => {
      const metadata = JSON.parse(contents)
      const apkFile = metadata.apk
      const srcPath = `${src}${apkFile}`
      resolve(srcPath)
    })
    .catch(err => resolve(null)) //fail silently)
})