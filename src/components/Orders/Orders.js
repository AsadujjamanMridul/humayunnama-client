import React, { useEffect, useState, useContext, Fragment } from 'react';

import { UserContext } from '../../App'
import Header from '../Header/Header';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5055/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const orderDetailList = () => {
        return (
            orders.map(order => {
                return (
                    <Fragment>
                        <tbody>
                            <tr scope="row mt-3">
                                <td className="py-2 px-1">{order.bookName}</td>
                                <td className="p-1 py-2">{order.authorName}</td>
                                <td className="text-center p-1 py-2">{order.quantity}</td>
                                <td className="text-end p-1 py-2">$ {order.bookPrice}</td>
                                <td className="text-end p-1 py-2">{order.orderTime}</td>
                            </tr>
                        </tbody>
                    </Fragment>
                )
            })
        )
    }



    return (
        <div>
            <Header />
            <div className="container py-5">
                <h3 className="checkout-header">Orders</h3>

                <div className="p-1 p-md-5 rounded-20 custom-card">
                    <table className="table container-fluid table-borderless table-hover">
                        <thead>
                            <th scope="col" className="py-3 px-1">Book Name</th>
                            <th scope="col" className="py-3 p-1">Author Name</th>
                            <th scope="col" className="text-center px-1 py-3">Quantity</th>
                            <th scope="col" className="text-end px-1 py-3">Price</th>
                            <th scope="col" className="text-end px-1 py-3">Order Time</th>
                        </thead>
                        {
                            orderDetailList()
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Orders;