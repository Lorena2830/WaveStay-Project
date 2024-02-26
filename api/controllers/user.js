const User = require('../models/user')
const Booking = require('../models/booking')
const bcrypt = require('bcrypt')

async function getAllUsers(req, res) { //vamos a optener todos los usuarios
	try {
		const users = await User.findAll()
		if (users) {
			return res.status(200).json(users)
		} else {
			return res.status(404).send('No users found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneUser(req, res) { //vamos a optener un usuario
	try {
		const user = await User.findByPk(req.params.id, {
			include: Booking
		})
		if (user) {
			return res.status(200).json(user)
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const getOwnProfile = async (req, res) => {
    try {
      const user = await User.findByPk(res.locals.user.id, {
        include: Booking
      })
      res.status(200).json({
        message: "User profile correct",
        result: user,
      });
    } catch (error) {
        console.log(error)
      res.status(500).json({
        message: "Error view user",
        result: error,
      });
    }
  }

  const createUser = async (req, res) => { //creamos un usuario y encriptamos su contraseña para guardarla encriptada
    try {
      const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS))
      const hash = bcrypt.hashSync(req.body.password, salt)
  
      req.body.password = hash
  
      const user = await User.create(req.body)
  
      res.status(200).json({
        message: "User created",
        result: user,
      })
    } catch (error) {
      res.status(500).json(
        {
          message: 'Error creating user',
          result: error
        }
      )
    }
  }

  async function updateUser(req, res) {
	try {
		const [userExist, user] = await User.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (userExist !== 0) {
			return res.status(200).json({ message: 'User updated', user: user })
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}
//faltaría actualizar y borrar mi propio perfil
async function deleteUser(req, res) {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (user) {
			return res.status(200).json('User deleted')
		} else {
			return res.status(404).send('User not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllUsers,
	getOneUser,
    getOwnProfile,
	createUser,
	updateUser,
	deleteUser,
}
