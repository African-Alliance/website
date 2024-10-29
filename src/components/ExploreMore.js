import React from 'react';
import '../styles/ExploreMore.css';
import explore from '../assets/Invest in your future_ Secure your future.jpg'
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const ExploreMore = () => {
    return (
        <>
            <FadeInSection>
                <div className="explore-container d-flex flex-column flex-md-row">
                    <img src={explore} alt='product' />
                    <div className='explore-text d-flex flex-column justify-content-between mx-3'>
                        <h3 className=''>Invest in your future; Secure your future</h3>
                        <p className='  text-dark'>With over sixty years of dedicated service, African Alliance Insurance has become a
                            trusted part of the lives of countless Nigerians. We’ve spent decades perfecting our craft, working with
                            experienced professionals who truly understand the importance of securing your future. Our team is not only seasoned
                            in the industry but deeply committed to designing solutions that fit the unique needs of each individual, family, and business we serve. <br></br>
                        </p>
                     
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
