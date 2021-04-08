import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
    


    let defaultDisplay = <AddBook/>;

    const [displayToogle, setDisplayToggle] = useState(defaultDisplay);

    const addBookDisplay = () => {
        setDisplayToggle(defaultDisplay);
    }

    const manageBooksDisplay = () => {
        setDisplayToggle(<ManageBooks/>);
    }


    return (
        <div className="m-0">
            <div className="row">

                {/* Goriber SideNavbar */}
                <div className="col-md-4 col-lg-3 m-0 p-0 bg-info">
                    <Link to="/home" className="text-decoration-none">
                        <h3 className="admin-header text-center my-5">হুমায়ূননামা</h3>
                    </Link>
                    <button onClick={manageBooksDisplay} className="btn btn-secondary container-fluid py-3">Manage Product</button>
                    <button onClick={addBookDisplay} className="btn btn-dark container-fluid py-3">Add Product</button>
                </div>


                {
                    displayToogle
                }



            </div>
        </div>
    );
};

export default Admin;