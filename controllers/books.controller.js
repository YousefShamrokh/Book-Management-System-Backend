const bookModel = require('../models/books.model')

exports.getAllBooks = async function(req,res) {
    try {
        const books = await bookModel.find()
        res.json({message: "Done" , data: books})
    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.addOneBook = async function(req,res) {
    try {
        if(req.user.role === 'Admin'){
        const createBook = await bookModel.create(req.body)
        res.json({message: "Book Created" , data: createBook})
        }
        else {
            res.status(403).send({
                message: "You don't have access to this function."
            })
        }
    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}

exports.getOneBook = async function(req,res) {
    try{
        if(req.user.role === 'Admin'){
    const book = await bookModel.findbyID(req.params.id);
    res.json({message: "Book found", data: book})
    }
else{
    res.status(403).send({
        message: "You don't have access to this function."
    })
}
    }
catch(err){
    res.status(400).send({
        message: err
    })
}}

exports.updateOneBook = async function(req,res) {
    try{
        if(req.user.role === 'Admin'){
            let { id } = req.params
            let { name, author, description, price } = req.body
            const book = await bookModel.findByIdAndUpdate(id, req.body)
            res.json({ message : "Book updated.", data: book})
        }
        else {
            res.status(403).send({
                message: "You don't have access to this function."
            })
        }
    } catch(err){
        res.status(400).send({
            message: err
        })  
    } 
}

exports.deleteOneBook = async function(req,res) {
    try {
        if(req.user.role === 'Admin') {
            await bookModel.findByIdAndDelete(req.params.id)
            res.json({message: "Book deleted" , data: []})
        } else {
            res.status(403).send({
                message: 'You Dont have access to delete a book you need to be an admin'
            })
        }


    } catch(err){
        res.status(400).send({
            message: err
        })
    }
}