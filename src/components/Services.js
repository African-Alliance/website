import { Link } from "react-router-dom";
import "../styles/Services.css";
import FadeInSection from "./FadeInSection";


const Services = () => {
    return (
        <>
            <div className="mt-3 mt-md-5 py-md-3">
                <FadeInSection>
                    <div className="service-header text-center">
                        <h3>Services</h3>
                        <p></p>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='service-container d-flex flex-column justify-content-center'>
                        <div className='container d-flex flex-nowrap justify-content-around my-1 my-md-3 w-md-75 service-list'>
                            <div>
                                <Link className='service'><span className="material-icons">calculate</span>CALCULATE PREMIUM</Link>
                            </div>
                            <div>
                                <Link className='service'><span className="material-icons">
                                    domain_verification
                                </span>ANNUITY VERIFICATION</Link>
                            </div>
                            <div>
                                <Link className='service'><span class="material-icons">
                                    credit_card
                                </span>PAY PREMIUM</Link>
                            </div>
                            <div>
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