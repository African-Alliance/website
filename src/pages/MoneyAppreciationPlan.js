import React from 'react';
import '../styles/PageStyle.css';
import '../styles/Material_Icon.css';
import { Link } from 'react-router-dom';
import banner from '../assets/money appreciation plan.jpg';

export default function MoneyAppreciation() {
  return (
    <>
      <div className='intro-container'>
        <div className="banner-image">
          <img src={banner} alt="investmentspecial" />
        </div>
        <div className="product-content d-flex flex-column flex-md-row justify-content-center mt-3 mt-md-5 mx-2 mx-md-auto">
          <div className="intro-header text-left text-md-right col-12 col-md-6 typo48 px-4 d-flex align-items-center justify-content-start justify-content-md-end">
            <h3>Money Appreciation Plan</h3>
          </div>
          <div className="intro-bar"></div>
          <div className="intro-text col-12 col-md-6 px-4">
            {/* <p className="caption-subtitle typo20"> */}
            <p>
              The Money Appreciation Plan, a special plan designed for organizations, corporate bodies etc. add more text here
            </p>
            <Link className="product-link">Get started</Link>
          </div>
        </div>
        <hr
          className="my-3 my-md-5 mx-1 "
          style={{ backgroundColor: '#1b3271' }}
        ></hr>

        <div className="investment-container d-flex flex-column align-items-md-start flex-md-row col-md-12 col-lg-9 my-3 pt-md-4 my-md-5 align-items-center justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <h4 style={{ color: '#1b3271' }}>Unified account</h4>
            <p>While all individual under is under a policy, an individual claim can be treated when needed as requested by the group</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 text-wrap">
            <h4 style={{ color: '#1b3271' }}>Safe future for all</h4>
            <p>The appreciation plan ensures everyone in the group is carried along in the overall affairs</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h4 style={{ color: '#1b3271' }}>Safe future for all</h4>
            <p>A single group policy ensures everyone in the group is carried along in the overall affairs</p>
          </div>
        </div>

        <div class='d-flex flex-column align-items-center justify-content-center p-3'>
          <div class='feature-header mx-4 mx-md-5 mb-3 text-center '>
            <h2>For the child you love</h2>
          </div>

          <div class="row mx-0 mx-sm-2 mx-md-5 justify-content-center">
            <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
              <span class="material-icons">volunteer_activism</span>
              <h3>Huge interest</h3>
              <p>
                You earn up to 5% interest on your savings, which is higher than what most commercial banks offer
              </p>
            </div>

            <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
              <span class="material-icons">volunteer_activism</span>
              <h3>Death covered</h3>
              <p>
                We insure your life during the cover period, ensuring that if death occurs while the policy is on,
                a FREE amount as high as N1,000,000 (depending on your policy) plus the money you would have contributed is sent to your pre-listed nominees to assist them during the period of loss.
              </p>
            </div>

            <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
              <span class="material-icons">volunteer_activism</span>
              <h3>Easy and fast loan request</h3>
              <p>
                You become eligible to request policy loans after your first two years of saving.
              </p>
            </div>

            <div class="feature-card col-10 col-md-6 col-lg-4 mb-4 text-center">
              <span class="material-icons">volunteer_activism</span>
              <h3>Accountability & Transparency</h3>
              <p>
                You can request for your financial statements at any time.
              </p>
            </div>

            <div class="feature-card col-10 col-md-6 col-lg-4 mb-4 text-center">
              <span class="material-icons">volunteer_activism</span>
              <h3>Easy steps</h3>
              <p>
                No medical examination required
              </p>
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

        <div className=' d-flex  justify-content-center mt-5'>
          <Link className="product-link">See all products</Link>
        </div>

      </div>
    </>
  );
}
