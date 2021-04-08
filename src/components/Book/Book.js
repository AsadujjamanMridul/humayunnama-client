import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {

    const { bookName, authorName, bookPrice, imageURL, _id } = props.book;
    return (
        <div class="col">
            <div class="card h-100 rounded-20 custom-card">
                <div class="m-3 bg-casual-shoe rounded-20 d-flex justify-content-center">
                    <img src={imageURL} className="card-img-top w-50 py-3 rounded" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title custom-card-title blue-font">{bookName}</h5>
                    <p class="card-text roboto-16">{authorName}</p>
                </div>
                <div class="card-footer custom-card-footer d-flex justify-content-between align-items-center">
                    <h3 class="price-tag orange-font">$ {bookPrice}</h3>
                    <Link to={`/checkout/${_id}`} className="text-decoration-none">
                        <button class="btn btn-info custom-button d-flex align-items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className='me-3' />Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;