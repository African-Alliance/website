import React from 'react';
import '../styles/PageStyle.css';
import '../styles/Material_Icon.css';
import { Link } from 'react-router-dom';
import banner from '../assets/smart kid education plan.jpg';
import smartKid from '../assets/smart kid education plan.jpg';

export default function SmartKidEducation() {
  return (
    <div className='intro-container'>
      <div className="banner-image">
        <img src={banner} alt="investmentspecial" />
      </div>
      <div className="product-content d-flex flex-column flex-md-row justify-content-center mt-3 mt-md-5 mx-2 mx-md-auto">
        <div className="intro-header text-left text-md-right col-12 col-md-6 typo48 px-4 d-flex align-items-center justify-content-start justify-content-md-end">
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
      <div class='d-flex flex-column align-items-center justify-content-center p-3'>
        <div class='feature-header mx-4 mx-md-5 mb-3 text-center '>
          <h2>Some benefits...texts</h2>
        </div>

        <div class="row mx-0 mx-sm-2 mx-md-5 justify-content-center">
          <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
            <span class="material-icons">volunteer_activism</span>
            <h3>Disability Benefit</h3>
            <p>In the event of permanent disability of the policyholder during the policy term, the sum assured becomes payable.</p>
          </div>

          <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
            <span class="material-icons">volunteer_activism</span>
            <h3>Maturity Benefit</h3>
            <p>At maturity, the policyholder receives the sum assured. This is payable in four (4) equal annual (yearly) installments from the maturity date.</p>
          </div>

          <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
            <span class="material-icons">volunteer_activism</span>
            <h3>Death Benefit</h3>
            <p>In the event of death of the policyholder before maturity, the sum assured becomes payable.</p>
          </div>

          <div class="feature-card col-10 col-md-6 col-lg-4 mb-4 text-center">
            <span class="material-icons">volunteer_activism</span>
            <h3>Surrender Value Benefit</h3>
            <p>Surrender Value benefit becomes payable in the event that the policyholder decides to cancel their policy after two years of premium payment.</p>
          </div>

          <div class="feature-card col-10 col-md-6 col-lg-4 mb-4 text-center">
            <span class="material-icons">volunteer_activism</span>
            <h3>Waiting Period</h3>
            <p>There is a six (6) months waiting period during which no benefit is payable in the event of the death of the policyholder, other than a refund of premium paid.</p>
          </div>
        </div>
      </div>

      <div>
        <div className='contact-badge'>
          <div className='contact-badge-overlay'>
            <div className='contact-badge-right d-flex justify-content-center align-items-center'>
              <p className='text-wrap'>
                <span className='badge-span mr-0 mr-md-3'>Find out how to get started</span>
              </p>
              <Link className='badge-link text-center mt-1 mt-md-0'>

                Speak to an agent
              </Link>
              <p className='mt-4'>OR</p>
            </div>
          </div>
        </div>
        <div className='contact-badge-customer-care d-flex flex-column flex-md-row justify-content-center align-items-center'>
          <p className='mr-4 pb-3'><span className='font-weight-bold h5'>Contact customer care</span></p>
          <p className=' d-flex flex-column flex-md-row align-items-center justify-content-center'>
            <p className='mr-3 d-flex align-items-center'>
              <span className="material-icons mr-1">
                call
              </span>
              <a href="tel:+2348066309476" className="text-white text-wrap " style={{ textDecoration: 'none' }}>
                +234 806 630 9476
              </a>
            </p>
            <span className='d-none d-md-flex pb-3'>|</span>
            <p className='ml-3'>
              <span className="material-icons mr-1">
                email
              </span>
              <a href="mailto:customer@africanallianceplc.com" className="text-white text-wrap" style={{ textDecoration: 'none' }}>
                customer@africanallianceplc.com
              </a>
            </p>
          </p>

        </div>
      </div>

      <div className='smart-kid-calculation d-flex flex-column flex-md-row justify-content-around mt-5'>
        <div className='smart-kid-cal-one w-100 mt-md-2'>
          <h3 className='w-100'>
            Premium Calculation
          </h3>
          <p className='w-100 mt-1 text-wrap'>A sample calcualtion of your premium is shown in the table. Key calcualtion factors includes age of child, sum assured and period</p>
        </div>
        <div className='smart-kid-cal-two w-100 mt-3'>
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
            <tr className='font-weight-bold'>
              <td>Premium (monthly)</td>
              <td>N8,210</td>
            </tr>

          </table>
        </div>
      </div>

    </div>
  );
}
