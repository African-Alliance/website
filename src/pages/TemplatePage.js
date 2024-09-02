import React from "react";
import '../styles/PageStyle.css';
import '../styles/Material_Icon.css';
import { Link } from "react-router-dom";
import banner from '../assets/father_looking_at_sons_eyes.jpg'

export default function InvestmentSpecialPlan() {
    return (
      <div>
        <div className="banner-image">
          <img src={banner} alt="investmentspecial" />
        </div>
        <div className="product-content d-flex flex-column flex-md-row justify-content-center mt-3 mt-md-5 mx-2 mx-md-0">
          <div className="intro-header text-left text-md-right col-12 col-md-6 typo48 px-4">
            <h3>Build your Future Today.</h3>
            <h3>With Us.</h3>
          </div>
          <div className="intro-bar"></div>
          <div className="intro-text col-12 col-md-6 px-4">
            <p className="caption-subtitle typo20">
              Explain how the investment special plan improves life of clients.
              Then some more text<br></br>
              The African Alliance investmentspecial Plan is perfect for you if
              you worry about the future, the quality of your life and your
              loved ones after retirement.
            </p>
            <Link className="product-link">Get started</Link>
          </div>
        </div>
        <hr
          className="my-3 my-md-5 mx-3"
          style={{ backgroundColor: '#1b3271' }}
        ></hr>
        <div className="product-features d-flex flex-column align-items-center">
          <h3 className="col-9 text-center">
            This section highlights the benefits and features of this plan
          </h3>
          <div className="container">
            <div className="row gy-5 features-list align-items-center justify-content-center">
              <div className="col-12 col-sm-6 text-center">
                <span className="material-icons md-1rem">
                  volunteer_activism
                </span>
                <h3>Confidence</h3>
                <h6>Avoid loss of money</h6>
                <p>Easily get all plans sorted</p>
              </div>
              <div className="col-12 col-sm-6 col-lg-6 text-center">
                <span className="material-icons md-1rem">diversity_1</span>
                <h3>Ease of Access</h3>
                <h6>Another</h6>
                <p>Access</p>
              </div>
              <div className="col-12 col-sm-6 text-center">
                <span className="material-icons md-1rem">real_estate_agent</span>
                <h3>Achieve mortgage dreams</h3>
                <h6>Another</h6>
                <p>Access</p>
              </div>
              <div className="col-12 col-sm-6 text-center">
                <span className="material-icons md-1rem">diversity_1</span>
                <h3>Peace of mind</h3>
                <h6>Another</h6>
                <p>Wonderfully Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};