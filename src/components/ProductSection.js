import React from 'react';
import '../styles/ProductSection.css';
import { Link } from 'react-router-dom';

const ProductSection = () => {
    return (
        <>
            <div class="contact-badge d-flex flex-column flex-md-row justify-content-around align-items-center py-5 py-md-4 px-2">
                <p className='text-wrap'>
                    <span className='badge-span '>New to Insurance?</span> Speak to us to find out the right product for you
                </p>
                <Link className='badge-link text-center mt-3 mt-md-0'>Talk to us</Link>
            </div>
        </>
    );
};

export default ProductSection;
