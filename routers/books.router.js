const Router = require('express')
const bookController = require('../controllers/books.controller')
const authentication = require('../middlewares/auth') // Middlewre
const router = Router()


router.post('/api/books', authentication,  bookController.addOneBook) // Private add new book
router.get('/api/books', authentication, bookController.getAllBooks) // Private get all books
router.delete('/api/books/:id', authentication, bookController.deleteOneBook) // Private delete one book
router.get('/api/books/:id', authentication, bookController.getOneBook) // Private get one book
router.put('/api/books/:id', authentication, bookController.updateOneBook) // Private update one book



module.exports = router