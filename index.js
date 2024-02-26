require('dotenv').config()
const { checkConnection, syncModels } = require('./database/dbindex')
//const addRelationsToModels = require('./database/models')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncPostgreSQL() {
    await checkConnection()
    //addRelationsToModels()
    await syncModels()
  }

  function initializeAndListenWithExpress() {
    const app = express()
      .use(cors())
      .use(morgan('dev'))
      .use(express.json())
      //.use('/api', require('./api/routes'))
  
      .listen(process.env.PORT, () => {
        console.log(`> Listening on port: ${process.env.PORT}`)
      })
  }

  async function start() { // este función es la que se encarga de arrancar toda la app
    await checkAndSyncPostgreSQL()
    initializeAndListenWithExpress()
  }
  start()