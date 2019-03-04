require('shelljs/global')

const cSaveTracePath = './dist/trace/'

rm('-rf', cSaveTracePath)
mkdir('-p', cSaveTracePath)

module.exports = {
  targetWebsite: 'https://www.bilibili.com/',
  targetOrigin: 'https://www.bilibili.com/',
  saveTracePath: cSaveTracePath
}
