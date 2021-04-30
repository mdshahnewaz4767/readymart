import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import bgIcon from '../../images/icons/header-icon.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark pt-3">
                <div className="container">
                    <Link to="/" className="navbar-brand site-name">
                        Readymart<span className="dot">.</span>
                    </Link>
                    <img src={bgIcon} className="icon-header" alt="bg-icon"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link font-weight">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link font-weight">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link font-weight">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link font-weight">Contact</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ? <p className="nav-link user-name">{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</p> : 
                                    <Link to="/login">
                                        <button className="btn register-btn">Login</button>
                                    </Link> 
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
        </div>
    );
};

export default Header;