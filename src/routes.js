const {
    addBooksHandler,
    getAllBooksHandler,
    getBooksByIdHandler,
    editBookByIdHandler,

} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: editBookByIdHandler,
    }
];

module.exports = routes;