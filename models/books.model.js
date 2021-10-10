// Métodos de acceso a la base de datos para la tabla books


//Todos los libros

const getAllBooks = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from books', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });;
};


//Todos los libros por ID
const getBookById = (pBookId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from books where id = ?', [pBookId], (err, rows) => {
            if (err) reject(err);
            // Rows puede tener cero valores si el id no existe
            // rows tendrá un valor si el ID existe
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    });
}

//Crear nuevos libros
const createBook = ({ name, ISBN, fk_author }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into books(name, ISBN, fk_author) values (?,?,?)', [name, ISBN, fk_author], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}



module.exports = { getAllBooks, getBookById, createBook }