import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../Header/Header';
import './Checkout.css'

import { UserContext } from '../../App'

const Checkout = () => {

    const { _id } = useParams();

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedBook, setSelectedBook] = useState({});
    useEffect(() => {
        fetch('https://agile-inlet-51437.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                data.find((book) => {
                    if (book._id === _id) {
                        setSelectedBook(book);
                    }
                })
            });
    }, [])

    const handleCheckout = () => {
        const orderDetail = {
            customerName: loggedInUser.name,
            customerEmail: loggedInUser.email,
            bookId: selectedBook._id,
            bookName: selectedBook.bookName,
            authorName: selectedBook.authorName,
            quantity: 1,
            bookPrice: selectedBook.bookPrice,
            orderTime: new Date().toDateString()
        }

        fetch('https://agile-inlet-51437.herokuapp.com/placeOrder', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(dat => {
                alert("Your order has been placed successfully");
                history.replace('/orders');
            })
    }

    return (
        <div>
            <Header />
            <div className="container py-5">
                <h2 className="checkout-header">Checkout</h2>


                {/* Table */}
                <div className="container p-5 rounded-20 custom-card">
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3 px-1">Description</th>
                                <th scope="col" className="py-3 px-1">Author</th>
                                <th scope="col" className="text-end py-3 px-1">Quantity</th>
                                <th scope="col" className="text-end py-3 px-1">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row" className="px-1">{selectedBook.bookName}</td>
                                <td className="px-1">{selectedBook.authorName}</td>
                                <td className="text-end px-1">1</td>
                                <td className="text-end px-1">$ {selectedBook.bookPrice}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td scope="row" colSpan="3" className="py-3 px-1">Total</td>
                                <td className="text-end py-3 px-1"><strong> $ {selectedBook.bookPrice}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="d-flex justify-content-end">
                    <button onClick={handleCheckout} className="btn btn-info px-4 py-3 mt-5 nav-login-btn">Checkout</button>
                </div>

            </div>
        </div>
    );
};

export default Checkout;