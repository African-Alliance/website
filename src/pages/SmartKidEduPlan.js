import React from 'react';
import '../styles/PageStyle.css';
import '../styles/Material_Icon.css';
import { Link } from 'react-router-dom';
import banner from '../assets/smart kid education plan.jpg';

export default function SmartKidEducation() {
  return (
    <div className='smart-kid-container'>
      <div className="banner-image">
        <img src={banner} alt="investmentspecial" />
      </div>
      <div className="product-content d-flex flex-column flex-md-row justify-content-center mt-3 mt-md-5 mx-2 mx-md-0">
        <div className="intro-header text-left text-md-right col-12 col-md-6 typo48 px-4 d-flex align-items-center justify-content-end">
          <h3>African Alliance Smart Kid Educational Plan</h3>
        </div>
        <div className="intro-bar"></div>
        <div className="intro-text col-12 col-md-6 px-4">
          {/* <p className="caption-subtitle typo20"> */}
          <p>
            An education savings plan and life insurance policy designed to secure
            your children’s future education. It differs from the Children Education Plan in a variety of ways.
          </p>
          <p>It provides your nominated beneficiaries with a sum determined by you (the policyholder) if death occurs. On the flip side,
            we will pay the full sum assured for your
            children’s education at the end of the term if you, the policyholder outlives the policy, ensuring that you always get value for your money</p>
          <Link className="product-link">Get started</Link>
        </div>
      </div>
      <hr
        className="my-3 my-md-5 mx-3"
        style={{ backgroundColor: '#1b3271' }}
      ></hr>
      <div className='smart-kid-bullet'>
        <div className='smark-kid-bullet-header'>
          <h2>
            A cover for every every child.
          </h2>
          <p className='h3'>
            Our Kids Education plan is simplified to these:
          </p>
        </div>

        <ol className='smart-kid-list'>
          <li>
            <h5>Inclusiveness</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
          <li>
            <h5>Inclusiveness</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
          <li>
            <h5>Inclusiveness</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
          <li>
            <h5>Inclusiveness</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
          <li>
            <h5>Inclusiveness</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
        </ol>
      </div>
      <div className="product-features d-flex flex-column align-items-center">
        <h3 className="col-9 text-center">
          This section highlights the benefits and features of this plan
        </h3>
        <div className="container">
          <div className="row gy-5 features-list align-items-center justify-content-center">
            <div className="col-12 col-sm-6 text-center">
              <span className="material-icons md-1rem">volunteer_activism</span>
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
}
