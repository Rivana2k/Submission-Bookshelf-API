const { nanoid } = require('nanoid');
const books = require('./books');

const addBooksHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload;

    if (!name) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku'
        });
        response.code(400);
        return response;
    }
    if(readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updateAt = insertedAt;
    const finished = pageCount === readPage;

    const newBooks = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updateAt,
    };

    books.push(newBooks);
    const isSuccess = books.filter((books) => books.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                booksId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response ({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });
    response.code(400);
    return response;
};

const getAllBooksHandler = () => ({
    status: 'success',
    data: {
        books,
    },
});

module.exports = {
    addBooksHandler,
    getAllBooksHandler,
};
