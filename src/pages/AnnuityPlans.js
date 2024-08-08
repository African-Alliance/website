import React from "react";
import '../styles/AnnuityPlans.css';
import { Link } from "react-router-dom";
import annuity from '../assets/father_looking_at_sons_eyes.jpg'

export default function AnnuityPlan() {
    return (
        <div>
            <div className="annuity-image">
                <img src={annuity} alt="annuity" />
            </div>
            <div className="annuity-content d-flex flex-column flex-md-row justify-content-center mt-3 mt-md-5 mx-2 mx-md-0">
                <div className="intro-header text-left text-md-right col-12 col-md-6">
                    <h3>Secure Quality Life for Future.</h3>
                    <h3>Alongside Family.</h3>
                </div>
                <div className="intro-text col-12 col-md-6">
                    <p className="text-wrap">
                        Explain how the annuity plan improves life of clients. Then some more text<br></br>
                        The African Alliance Annuity Plan is perfect for you if you worry about the future, the quality of your life and your loved ones after retirement.
                    </p>
                    <Link className="annuity-link">Get started</Link>
                </div>
            </div>
            <hr className="my-3 my-md-5 mx-3" style={{ backgroundColor: '#1b3271' }}></hr>
            <div className="annuity-features d-flex flex-column align-items-center">

                <h3>Everything you benefit from the Annuity Plan</h3>
                <div className="features-list d-flex flex-wrap align-items-center justify-content-center w-100">
                    <div className="col-12 col-sm-6 col-md-3 p-2 text-center">
                        <span className="material-icons">volunteer_activism</span>
                        <h3>Savings</h3>
                        <h6>Avoid loss of money</h6>
                        <p>Easily get all plans sorted</p>
                    </div>
                    <div className="product col-12 col-sm-6 col-md-3 p-2 text-center">
                        <span className="material-icons">diversity_1</span>
                        <h3>Child and Family</h3>
                        <h6>Another</h6>
                        <p></p>
                    </div>
                    <div className="product col-12 col-sm-6 col-md-3 p-2 text-center">
                        <span className="material-icons">real_estate_agent</span>
                        <h3>Mortgage</h3>
                        <h6>Another</h6>
                        <p></p>
                    </div>
                    <div className="product col-12 col-sm-6 col-md-4 p-2 text-center">
                        <span className="material-icons">diversity_1</span>
                        <h3>Child and Family</h3>
                        <h6>Another</h6>
                        <p></p>
                    </div>
                    <div className="product col-12 col-sm-6 col-md-4 p-2 text-center">
                        <span className="material-icons">real_estate_agent</span>
                        <h3>Mortgage</h3>
                        <h6>Another</h6>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    );
};