const express = require('express')
const app = express()
const { version: appVersion } = require('./package.json')
// get the port from env variable
const PORT = process.env.PORT || 5050

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('Version :: ' + appVersion)
})

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    version: appVersion,
  })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on Port :: ${PORT}`)
})
