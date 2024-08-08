import { Link } from "react-router-dom";
import "../styles/Services.css";
import FadeInSection from "./FadeInSection";


const Services = () => {
    return (
        <>
            <div className="mt-2 mt-md-3 py-md-3">
                <FadeInSection>
                    <div className="service-header text-center">
                        <h3>Services</h3>
                        <p></p>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='service-container d-flex flex-column justify-content-center'>
                        <div className='container d-flex flex-wrap justify-content-around my-1 my-md-3 w-md-75 service-list'>
                            <div className="col-12 col-sm-6 col-md-3">
                                <Link className='service'><span className="material-icons">calculate</span>CALCULATE PREMIUM</Link>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <Link className='service'><span className="material-icons">
                                    domain_verification
                                </span>ANNUITY VERIFICATION</Link>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <Link className='service'><span class="material-icons">
                                    credit_card
                                </span>PAY PREMIUM</Link>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <Link className='service'><span class="material-icons">
                                    download
                                </span>DOWNLOAD FORMS</Link>
                            </div>

                        </div>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
};

export default Services;