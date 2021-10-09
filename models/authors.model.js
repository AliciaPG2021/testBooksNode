// Métodos de acceso a la base de datos para la tabla autores


//Todos los autores

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from authors', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });;
};


//Todos los autores por ID
const getAuthorById = (pAuthorId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from authors where id = ?', [pAuthorId], (err, rows) => {
            if (err) reject(err);
            // Rows puede tener cero valores si el id no existe
            // rows tendrá un valor si el ID existe
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    });
}

//Crear nuevos autores
const createAuthor = ({ first_name, last_name }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into authors(first_name, last_name) values (?,?)', [first_name, last_name], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}



module.exports = { getAll, getAuthorById, createAuthor }