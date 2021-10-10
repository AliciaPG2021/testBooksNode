
const router = require('express').Router();

const { getAll, getAuthorById, createAuthor, updateAuthor } = require('../../models/authors.model');


// GET http://localhost:3000/api/authors
router.get('/', (req, res) => {
    getAll()
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});


// GET http://localhost:3000/api/authors/2
router.get('/:authorId', async (req, res) => {
    try {
        const author = await getAuthorById(req.params.authorId)
        if (author) {
            res.json(author);
        } else {
            res.json({ message: 'El id del autor no existe' });
        }
    } catch (error) {
        res.json({ error: 'error' });
    }
});


// POST http://localhost:3000/api/authors
router.post('/', (req, res) => {
    createAuthor(req.body)
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.json({ error: 'error al crear autor' });
        })


});

// //PUT http://localhost:3000/api/authors/1

router.put('/:authorId', async (req, res) => {
    try {
        const result = await updateAuthor(req.params.authorId, req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
    }


});



module.exports = router;