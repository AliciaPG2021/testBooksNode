const router = require('express').Router();

const apiAuthorsRouter = require('./api/authors');
const apiBooksRouter = require('./api/books');

router.use('/authors', apiAuthorsRouter);
router.use('/books', apiBooksRouter);

module.exports = router;