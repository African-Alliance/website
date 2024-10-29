import { Link } from "react-router-dom";
import "../styles/Services.css";
import FadeInSection from "./FadeInSection";


const Services = () => {
    return (
        <>
            <div className="mt-2 ">
                {/* <FadeInSection> */}
                <div className="service-header text-center">
                    <h3>Services</h3>
                    <p></p>
                </div>
                {/* </FadeInSection> */}

                <div className='service-container d-flex flex-column justify-content-center'>
                    <div className='container d-flex flex-wrap justify-content-around my-1 my-md-3 w-md-75 service-list'>
                        <div className="col-12 col-sm-6 col-md-3">
                            <a className='service pt-1' href='https://calculator.africanallianceservices.com/' target='_blank' rel="noreferrer">
                                <span className="material-icons">calculate</span>CALCULATE PREMIUM
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 ">
                            <a className='service pt-1' href='https://aaplc.pensionidentity.com/' target='_blank' rel="noreferrer">
                                <span className="material-icons">
                                    domain_verification
                                </span>ANNUITY VERIFICATION
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <a className='service pt-1' href='https://www.quickteller.com/africanalliance' target='_blank' rel="noreferrer">
                                <span class="material-icons">
                                    credit_card
                                </span>PAY PREMIUM
                            </a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            
                            <a className='service pt-1' href='#' target='_blank' rel="noreferrer">
                                <span class="material-icons">
                                    download
                                </span>DOWNLOAD FORMS
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;