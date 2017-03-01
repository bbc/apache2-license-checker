const checkLicenses = require('./scripts/check-licenses')

/*
license-checker --json --out ./licences.json
node scripts/check-licenses.js
*/

const path = require('path')
const spawn = require('child_process').spawn
const licensesPath = path.join(__dirname, './licenses.json');
const command = spawn('license-checker', ['--json', '--out', licensesPath]);

command.stdout.on('data', (data) => {
  console.log(`license-checker stdout: ${data}`)
})

command.stderr.on('data', (data) => {
  console.log(`license-checker stderr: ${data}`)
})

command.on('close', (code) => {
  const licenses = require(licensesPath)
  checkLicenses(licenses)
})
