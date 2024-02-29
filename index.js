require('dotenv').config()
const { checkConnection, syncModels } = require('./database/dbindex')
const addRelationsToModels = require('./database/relations')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncPostgreSQL() {
    await checkConnection()
    addRelationsToModels()
    await syncModels()
  }

  const corsOptions = {
    origin: 'http://127.0.0.1:5173', // Reemplaza con el dominio de tu aplicación cliente
    optionsSuccessStatus: 200, // Algunos navegadores pueden devolver un código de estado 204
  };

  function initializeAndListenWithExpress() {
    const app = express()
      .use(cors(corsOptions))
      .use(morgan('dev'))
      .use(express.json())
      .use('/api', require('./api/routes'))
  
      .listen(process.env.PORT, () => {
        console.log(`> Listening on port: ${process.env.PORT}`)
      })
  }

  async function start() { // este función es la que se encarga de arrancar toda la app
    await checkAndSyncPostgreSQL()
    initializeAndListenWithExpress()
  }
  start()