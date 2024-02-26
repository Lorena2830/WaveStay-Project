const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT,
	port: process.env.DB_PORT,
	logging: false,
})

async function checkConnection() {
	try {
		await sequelize.authenticate()
		console.log('Connection to DB has been established successfully.')
	} catch (error) {
		throw error
	}
}

async function syncModels(value) {
	const state = {
		alter: { alter: true },
		force: { force: true },
	}

	try {
		await sequelize.sync(state[value] || '')
		console.log(`All models were synchronized (${JSON.stringify(state[value]) || ''}).`)
	} catch (error) {
		throw error
	}
}
module.exports = { sequelize, checkConnection, syncModels }