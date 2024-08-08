import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'; // Assuming you have jQuery installed
import '../styles/Navbar.css';
import logo from "../assets/AAI_Logo.png"

const Navbar = () => {

    useEffect(() => {
        const toggleDropdown = (e) => {
            const _d = $(e.target).closest('.dropdown');
            const _m = $('.dropdown-menu', _d);

            setTimeout(() => {
                const shouldOpen = e.type !== 'click' && _d.is(':hover');
                _m.toggleClass('show', shouldOpen);
                _d.toggleClass('show', shouldOpen);
                $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
            }, e.type === 'mouseleave' ? 300 : 0);
        };

        // Attach event listeners
        $('body')
            .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
            .on('click', '.dropdown-menu a', toggleDropdown);

        // Clean up event listeners on component unmount
        return () => {
            $('body')
                .off('mouseenter mouseleave', '.dropdown', toggleDropdown)
                .off('click', '.dropdown-menu a', toggleDropdown);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark  py-3 shadow-sm fixed-top">
            <Link to="/" className="navbar-logo">
                <img className='img-fluid' src='' alt="logo"  />
            </Link>
            <button
                className="navbar-toggler order-md-1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" className="collapse navbar-collapse order-sm-12 order-lg-1">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown megamenu">
                        <a
                            id="megamenu"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="nav-link  dropdown-toggle font-weight-bold text-uppercase"
                        >
                            Products & Services
                        </a>
                        <div aria-labelledby="megamenu" className="dropdown-menu border-0 p-0 m-0">
                            <div className="container-fluid">
                                <div className="row dropdown-bg rounded-0 m-0 shadow-sm">
                                    <div className="col-12">
                                        <div className="p-4">
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">Insure</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/children-education">
                                                                Children Education Plan (CEP)
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/money-appreciation">
                                                                Money Appreciation Plan (MAP)
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/smart-kid-education">
                                                                Alliance Smart Kid Educational Plan (ASK)
                                                            </Link></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">Investment</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link
                                                                className="navbar-link"
                                                                to="alliance-investment-plus"
                                                            >
                                                                Alliance Investment Plus Plan (AIP)
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/investment-special">
                                                                Alliance Investment Plus Plan Special
                                                            </Link></a>
                                                        </li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Group Alliance Income Investment Plan (GAIIP)
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Alliance Income Investment Plan
                                                            </Link></a></li>

                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">Services</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/children-education">
                                                                Pay Premium
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/money-appreciation">
                                                                Annuity Verification
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/smart-kid-education">
                                                                Calculate Premium
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="/smart-kid-education">
                                                                Download Form
                                                            </Link></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item dropdown megamenu">
                        <a
                            id="megamenu"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            className="nav-link dropdown-toggle font-weight-bold text-uppercase"
                        >
                            Company
                        </a>
                        <div aria-labelledby="megamenu" className="dropdown-menu border-0 p-0 m-0">
                            <div className="container-fluid">
                                <div className="row dropdown-bg rounded-0 m-0 shadow-sm">
                                    <div className="col-12">
                                        <div className="p-4">
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">About Us</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Who We Are
                                                            </Link> </a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Mission & Vision
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Our Values
                                                            </Link></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">Our Team</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Our Board
                                                            </Link></a></li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Our Management Team
                                                            </Link></a>
                                                        </li>
                                                        <li className="nav-item"><a href="#" className="nav-link text-small pb-0">
                                                            <Link className="navbar-link" to="#">
                                                                Alliance Income Investment Plan
                                                            </Link></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link to="/about" className="nav-link font-weight-bold text-uppercase">Contact</Link></li>
                    <li className="nav-item"><Link to="/services" className="nav-link font-weight-bold text-uppercase">Blog & News</Link></li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;
