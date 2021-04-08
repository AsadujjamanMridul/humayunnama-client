import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.css'
import Book from '../Book/Book';

import DotLoader from "react-spinners/DotLoader"

const Home = () => {

    const [loading, setLoading] = useState(true);

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(!loading)});
    }, [])


    return (
        <div>
            <Header />

            <div className="sweet-loading d-flex justify-content-center align-items-center">
                <DotLoader color={'#f4d160'} size={60} loading={loading} />
            </div>

            <div className="container px-3">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 p-5">
                    {
                        books.map(book => <Book book={book} key={book._id}></Book>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;