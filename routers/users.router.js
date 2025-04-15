const Router = require('express')
const userController = require('../controllers/users.controller')

const router = Router()


router.post('/api/users/register', userController.register) // Public
router.post('/api/users/login', userController.login) // Public

module.exports = router