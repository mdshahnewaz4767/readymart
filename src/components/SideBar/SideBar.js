import React, { useState } from 'react';
import  * as FaIcons from 'react-icons/fa';
import  * as AiIcons from 'react-icons/ai';
import styled from 'styled-components';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    background: #dadbde;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SidebarNav = styled.nav`
    background: #28223a;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    
`
const SidebarWrap = styled.div`
    width: 100%;
`

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div>
           <div className="small-device">
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose  onClick={showSidebar} />
                        </NavIcon>

                        <Link to="/" className="site-title text-center d-block mb-5 mt-3">
                            Readymart<span className="dot">.</span>
                        </Link>
                        <div className="categories">
                            <li className="list-color">
                                <Link to="/manageProduct">
                                    <FontAwesomeIcon icon={faThLarge} /> 
                                    <span className="ml-2">Manage Product</span>
                                </Link>
                            </li>
                            <li className="list-color">
                                <Link to="/addProduct">
                                    <FontAwesomeIcon icon={faPlus} /> 
                                    <span className="ml-2">Add Product</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <FontAwesomeIcon icon={faEdit} /> 
                                    <span className="ml-2">Edit Product</span>
                                </Link>
                            </li>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
           </div>
           <div className="sidebar-nav sideBar">
                <div className="sidebar-wrap">
                    <Link to="/" className="site-title text-center d-block mb-5 mt-3">
                        Readymart<span className="dot">.</span>
                    </Link>
                    <div className="categories">
                        <li className="list-color">
                            <Link to="/manageProduct">
                                <FontAwesomeIcon icon={faThLarge} /> 
                                <span className="ml-2">Manage Product</span>
                            </Link>
                        </li>
                        <li className="list-color">
                            <Link to="/addProduct">
                                <FontAwesomeIcon icon={faPlus} /> 
                                <span className="ml-2">Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <FontAwesomeIcon icon={faEdit} /> 
                                <span className="ml-2">Edit Product</span>
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SideBar;