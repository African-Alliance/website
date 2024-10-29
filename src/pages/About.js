import React, { useState } from 'react';
import '../styles/About.css';
import '../styles/Material_Icon.css';
import { Link } from 'react-router-dom';
import banner from '../assets/smartkid_pd.jpg';
import graphic from '../assets/Term Assurance 2.jpg'
import Banner from '../components/Banner';

export default function About() {
    const [showFullStory, setShowFullStory] = useState(false);

    const toggleStory = () => {
        setShowFullStory(prevState => !prevState);
    };
    return (
        <>
            <div className='about-container'>
                <Banner image={banner} />
                <div className="about d-flex flex-column justify-content-center align-items-center">
                    <div className="about-header col-10 col-md-6 mb-4">
                        <h2 className='mt-5 mb-4'>More Than Just Insurance</h2>
                        <div className='mission'>
                            <h5>OUR MISSION</h5>
                            <p>
                                To improve the quality of life of our clients and add value to our shareholders
                            </p>
                        </div>
                        <div className='vision'>
                            <h5>OUR VISION</h5>
                            <p>
                                To be the most preferred life insurance specialist
                            </p>
                        </div>
                    </div>
                    <div className='about-action d-flex flex-column  col-10 col-md-6'>
                        <Link className="about-link " to="/contact" >INSURE WITH US &gt;&gt;</Link>
                    </div>

                    <div className='story-section col-10 col-md-8'>
                        <h2>Our Story</h2>
                        <p>We're widely recognised as the most experienced and strongest Specialist Life Assurance Office in Nigeria,
                            serving thousands of customers with personalised insurance products tailored for each stage of their lives.</p>
                        <p>Formerly African Alliance Insurance Limited, we were incorporated on May 6, 1960 by our founders Chief S.L. Edu (CON), Mr T. A. Braithwaite (CON)
                            and Chief M.E.R. Okorodudu, backed by world class reinsurers and co-shareholders, Munich Reinsurance Company.</p>
                        <p>Today, African Alliance Insurance Plc drives innovation in the 21st century and uniquely positions itself to offer premium value to all its stakeholders, from its esteemed customers to its employees, partners and shareholders.</p>

                        {showFullStory && (
                            <>

                                <p>Operating a network of 18 branch offices managed by a competent and passionate team, we offer a creative combination of Protection (Term Assurance and Group Life), Savings and Investments Products.</p>
                                <p>Our clients choose us for our excellent customer service delivery and prompt claims settlement. In fact, in 2016 financial year alone, we paid an estimated N6.5 billion in settlement of various claims.</p>
                                <p>African Alliance Insurance Plc currently manages a Shareholders’ Fund estimated at N3.6bn with a Gross Premium Income and Asset Base estimated at N13.42bn and N41.35bn respectively (figures as at 31st December 2016-audited),
                                    an evidence of our strength, history and clients’ trust in our brand.</p>
                                <p>We have 100% equity in Axiom Air Limited, a Cargo Airline Company, Frenchies Foods (Nigeria) Limited, a Restaurant and Catering Services Company and 96% equity in Ghana Life Insurance Company Limited.</p>
                            </>
                        )}
                        <button className="read-more-btn" onClick={toggleStory}>
                            {showFullStory ? "- Show Less" : "+ Read More"}
                        </button>
                    </div>
                    <div className='core-value-section col-12 col-md-10'>
                        <h2>Our Core Values</h2>
                        <div className='core-values row d-flex justify-content-center'>
                            <div className='core-value col-11 col-md-5 big'>
                                <h3>ACCESSIBILITY</h3>
                                <p>Easy access to all our platforms and product</p>
                            </div>
                            <div className='core-value col-11 col-md-5 small'>
                            <h3>ACCOUNTABILITY</h3>
                            <p>Transparent processes to ensure you're in the loop </p>
                            </div>
                            <div className='core-value col-11 col-md-5 small'>
                            <h3>INTEGRITY</h3>
                            <p>Prompt to our promises; excellent delivery including claims</p>
                            </div>
                            <div className='core-value col-11 col-md-5 big'>
                            <h3>PROFESSIONALISM</h3>
                            <p>We're equipped with the best staff and teams to provide you global standard services</p>
                            </div>
                            <div className='core-value col-11 col-md-5 big'>
                            <h3>LOYALTY</h3>
                            <p>Our dear customers are always at the fore-front of our decisions; you matter the most.</p>
                            </div>
                            <div className='core-value col-11 col-md-5 small'>
                            <h3>CREATIVITY</h3>
                            <p>We boast of the most creative life insurance product that suits everyone in Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
