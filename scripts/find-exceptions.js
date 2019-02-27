const fs = require('fs')
const path = require('path')
const colors = require('colors/safe')

function findExceptions() {
  const exceptionsFilePath = path.join(process.cwd(), 'license-exceptions.json')
  const file = readFile(exceptionsFilePath)
  const exceptions = parseExceptionsFile(file)

  return exceptions || {}
}

function readFile(filePath) {
  let file
  try {
    file = fs.readFileSync(filePath, 'utf8')
  }
  catch(ex) {
    console.info('Checked for local license-exceptions.json; but no file was found.')
  }
  return file
}

function parseExceptionsFile(fileContents) {
  let exceptions
  if (fileContents) {
    try {
      exceptions = JSON.parse(fileContents).exceptions
      console.log(`Found ${Object.keys(exceptions).length} local exceptions in liscense-exceptions.json:`)
      Object.keys(exceptions).forEach((name) => {
        const reason = exceptions[name].reason || 'No reason given'
        console.log(colors.blue(`  - ${name} : ${reason}`))
      })
      console.log('')
    }
    catch(ex) {
      console.error('Found a local license-exceptions.json; but there was a JSON parse error:')
      console.error(fileContents)
    }
  }
  return exceptions
}

module.exports = findExceptions()
