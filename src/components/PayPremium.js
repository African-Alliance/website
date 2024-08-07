import React from 'react';
import '../styles/PayPremium.css';

const PayPremium = () => {
    return (
        <>
            <div className="paypremium-container ">
                <div className='paypremium d-flex flex-column justify-content-center flex-md-row justify-content-md-between align-items-md-center'>
                    <div>
                        <h4>Pay Premium Now</h4>
                        <p>You can easily pay for your premium within one minute</p>
                    </div>
                    <div>
                        <a class="premium-btn btn btn-link d-sm-flex align-items-center"
                            href="https://www.quickteller.com/africanalliance"
                            rel="noreferrer"
                            target="_blank">Pay Now <span class="material-icons ">east</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayPremium;
