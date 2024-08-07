import React from 'react';
import '../styles/ExploreMore.css';
import explore from "../assets/explore.jpg"
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const ExploreMore = () => {
    return (
        <>
            <FadeInSection>
                <div className="explore-container d-flex flex-column flex-md-row">
                    <img src={explore} alt='product' />
                    <div className='explore-text d-flex flex-column justify-content-between mx-3'>
                        <h3 className='my-2 my-md-3'>Invest in your future; Secure your future</h3>
                        <p className='my-2 my-md-3'>Some texts here about what we have been doing. And what we can offer for the future</p>
                        <Link class="explore-btn btn btn-link my-3 my-md-4"
                            to="">Explore products
                        </Link>
                    </div>
                </div>
            </FadeInSection>


        </>
    );
};

export default ExploreMore;
