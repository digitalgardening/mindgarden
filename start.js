#!/usr/bin/env node

const { loadConfiguration, startServer } = require('snowpack')
const path = require('path')

const server = require('./load/server')
server.listen(3000)

startSnowpackDev()

async function startSnowpackDev () {
  const config = await loadConfiguration('')

  const server = await startServer({ config })
  console.log('woop')
}
