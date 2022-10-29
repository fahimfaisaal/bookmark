const fs = require('fs')

const getFiles = (path) =>
  fs
    .readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(({ name }) => {
      const splitName = name.split('.')
      return {
        basename: name,
        ext: splitName.at(-1),
        filename: splitName.slice(0, -1).join(' ')
      }
    });

module.exports = {
  getFiles
}