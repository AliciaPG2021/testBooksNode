const { getAllBooks, getBookById, createBook, updateBoks, updateBook } = require('../../models/books.model');

const router = require('express').Router();



// GET http://localhost:3000/api/books
router.get('/', (req, res) => {
    getAllBooks()
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});


// GET http://localhost:3000/api/books/2
router.get('/:bookId', async (req, res) => {
    try {
        const author = await getBookById(req.params.bookId)
        if (author) {
            res.json(author);
        } else {
            res.json({ message: 'El id del libro no existe' });
        }
    } catch (error) {
        res.json({ error: 'error' });
    }
});


// POST http://localhost:3000/api/books
router.post('/', (req, res) => {
    createBook(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.json({ error: 'error al crear el libro' });
        })


});

// //PUT http://localhost:3000/api/books/1

router.put('/:bookId', async (req, res) => {
    try {
        const result = await updateBook(req.params.bookId, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }


});



module.exports = router;

