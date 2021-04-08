import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'

import './Header.css'

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    let loginButtonToggle;
    if (loggedInUser.name === undefined) {
        loginButtonToggle =
            <Link className="nav-link nav-login-btn" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
    }
    else {
        loginButtonToggle =
            <a className="nav-link userName" href="#">{loggedInUser.name}</a>
    }

    return (
        <div className="sticky-top navbar-bg m-0 p-0 shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light py-3 navbar-bg sticky-top">
                <div className="container">
                    <Link className="navbar-brand travelsphere" to="/">হুমায়ূননামা</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            <Link className="nav-link" to='/orders'>Orders</Link>
                            <Link className="nav-link" to="/admin">Admin</Link>
                            <a className="nav-link" href="#">Deals</a>
                            {
                                loginButtonToggle
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;