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
          <h3>
            A cover for every every child.
          </h3>
          <p className='h5'>
            Our Kids Education plan is simplified to these:
          </p>
        </div>

        <ol className='smart-kid-list'>
          <li>
            <h5>Longterm Availability</h5>
            <p>The product is available at a term of 5 to 20 years</p>
          </li>
          <li>
            <h5>Wide age range</h5>
            <p>The age range is between 18 and is 60 years</p>
          </li>
          <li>
            <h5>Payment limit</h5>
            <p>The minimum sum to be assured is N500, 000</p>
          </li>
          <li>
            <h5>Cuts across different groups</h5>
            <p>Open for pupils in levels between Nursery and Tertiary Institutions</p>
          </li>
          <li>
            <h5>Contract criteria</h5>
            <p>Medical examination may be required.
            </p>
          </li>
        </ol>
      </div>
      <div className='smart-kid-calculation d-flex flex-column flex-md-row justify-content-around'>
        <div className='smart-kid-cal-one'>
          <h3>
            Sample Premium Calculation
          </h3>
          <p>Understands how you can calcuate your premium based on the factors, age sum assured and period.</p>
        </div>
        <div className='smart-kid-cal-two'>
          <table>
            <tr>
              <td>Age (Next Birthday)</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Sum Assured</td>
              <td>N500,000</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>5 years</td>
            </tr>
            <tr>
              <td>Premium (monthly)</td>
              <td>N8,210</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="product-features d-flex flex-column align-items-center">
        <h3 className="col-9 text-center">
          Whatever the case, We have got you covered
        </h3>
        <div className="container">
          <div className="row gy-5 features-list align-items-center justify-content-center">
            <div className="col-12 col-sm-6 text-center">
              <span className="material-icons md-1rem">volunteer_activism</span>
              <h3>Disability Benefit</h3>
              
              <p>In the event of permanent disability of the policyholder during the policy term, the sum assured becomes payable</p>
            </div>
            <div className="col-12 col-sm-6 col-lg-6 text-center">
              <span className="material-icons md-1rem">diversity_1</span>
              <h3>Maturity Benefit</h3>
              <p>At maturity, the policyholder receives the sum assured. This is payable in four (4) equal annual (yearly) installments from the maturity date.</p>
              <p>Also, it has the option for the policyholder to receive the full sum assured at Maturity.</p>
            </div>
            <div className="col-12 col-sm-6 text-center">
              <span className="material-icons md-1rem">real_estate_agent</span>
              <h3>Death Benefit</h3>
              <p>In the event of death of the policyholder before maturity, the sum assured becomes payable.</p>
            </div>
            <div className="col-12 col-sm-6 text-center">
              <span className="material-icons md-1rem">diversity_1</span>
              <h3>Surrender Value Benefit</h3>
              <p>Surrender Value benefit becomes payable in the event that the policyholder 
                decides to Cancel their policy after two years premium have been paid to date.</p>
            </div>
            <div className="col-12 col-sm-6 text-center">
              <span className="material-icons md-1rem">diversity_1</span>
              <h3>Waiting Period</h3>
              <p>There is a six (6) months waiting period during which no benefit is payable 
                in the event of the death of the policyholder, other than a refund of premium paid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
