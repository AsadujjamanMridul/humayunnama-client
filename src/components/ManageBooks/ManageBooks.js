import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './ManageBooks.css'

const ManageBooks = () => {

    // Get All Books Information
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://agile-inlet-51437.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const deleteBook = (event, id) => {
        fetch(`https://agile-inlet-51437.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Book deleted successfully");

                    fetch('https://agile-inlet-51437.herokuapp.com/books')
                        .then(res => res.json())
                        .then(data => setBooks(data));
                }
            })

    }

    return (
        <div className="col-md-8 col-lg-9 m-0 pt-5 px-5 d-flex justify-content-center manage-books-bg">
            <div className="container py-3 rounded-20 custom-card mb-5">
                <table className="table table-borderless table-hover">
                    <thead>
                        <tr className="custom-table-header">
                            <th scope="col" className="py-3 px-5">Description</th>
                            <th scope="col" className="py-3 px-5">Author</th>
                            <th scope="col" className="text-end py-3 px-5">Price</th>
                            <th scope="col" className="text-end py-3 px-5">Action</th>
                        </tr>
                    </thead>

                    {
                        books.map(book => {
                            return (
                                <tbody>
                                    <tr id="delete">
                                        <td scope="row" className="px-5">{book.bookName}</td>
                                        <td className="px-5">{book.authorName}</td>
                                        <td className="text-end px-5">$ {book.bookPrice}</td>
                                        <td className="text-end px-5">
                                            <button onClick={(event) => deleteBook(event, book._id)} className="btn btn-danger px-3 py-2">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageBooks;