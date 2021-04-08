import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';



const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const history = useHistory();

    // Add New Book
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            bookPrice: data.bookPrice,
            imageURL: imageURL
        };
        const url = "http://localhost:5055/addBook";

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => {
                if (res) {
                    alert('Book has been added successfully!');
                    history.replace('/');
                }
            });

        
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd91d00e850c6752ba23118e0bcc8d162');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="col-md-8 col-lg-9 m-0 pt-5 px-5 d-flex justify-content-center align-items-center vh-100">
                <form className="container px-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="bookName" className="form-label">Book Name</label>
                        <input name="bookName" type="text" className="form-control" id="bookName" placeholder="Enter Name" {...register('bookName')} required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorName" className="form-label">Author Name</label>
                        <input name="authorName" className="form-control" list="datalistOptions" id="authorName" placeholder="Enter Name" {...register('authorName')} required></input>
                        <datalist id="datalistOptions">
                            <option value="Humayun Ahmed" />
                        </datalist>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookPrice" className="form-label">Add Price</label>
                        <input name="bookPrice" type="number" className="form-control" id="bookPrice" placeholder="Enter Price" {...register('bookPrice')} required></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label" required>Book Cover</label>
                        <input className="form-control" type="file" id="formFile" onChange={(event) => handleImageUpload(event)} />
                    </div>
                    <div className="d-flex justify-content-end mt-5">
                        <input type="submit" className="btn btn-primary px-4 py-2" value="Save" />
                    </div>
                </form>
            </div>
    );
};

export default AddBook;