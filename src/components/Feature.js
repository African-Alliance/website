import FadeInSection from "./FadeInSection";
import '../styles/Feature.css'
import image from '../assets/testimage.jpg'
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <section>
            <div className="container">
                <div className="py-5 py-md-5">

                    {/* Section header */}
                    <FadeInSection>
                        <div className="text-center feature-header pb-4 pb-md-5">
                            <h2 className="h2 mb-4">Basket of Our Product Plans</h2>
                            <p className="text-xl text-muted">Secure your future; Invest in your future. Our array of insurance plans is just what is needed for you and family.</p>
                        </div>
                    </FadeInSection>


                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" data-aos-id-blocks>

                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Investment Plus Plan
                                        </h4>
                                        <p className=" text-muted">
                                            Earn interest on savings towards
                                            a business or a special project
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Investment Plus Special Plan
                                        </h4>
                                        <p className=" text-muted">
                                            Earn interest on savings towards
                                            a business or a special project
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Term Assurance Plan
                                        </h4>
                                        <p className=" text-muted">
                                            Invest to fund your children’s
                                            future education tuition and lifestyle
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Mortgage Protection
                                        </h4>
                                        <p className=" text-muted">
                                            Protect your family from creditors
                                            when taking a mortgage
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Money Appreciation Plan
                                        </h4>
                                        <p className=" text-muted">
                                            Grow your investments while
                                            insuring your life at the same time
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                            Income Investment Plan
                                        </h4>
                                        <p className=" text-muted">
                                            A savings plan that has basic life cover
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                        Smart Kid Educational Plan
                                        </h4>
                                        <p className=" text-muted">
                                        Secure your children’s education
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>

                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                        Group Alliance Income Investment Plan (GAIIP)
                                        </h4>
                                        <p className=" text-muted">
                                        Secure your children’s education
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={image} alt="product plan" />
                                    <div className="col-12">
                                        <h4 className="h4 mb-2">
                                        Children Education Plan (CEP)
                                        </h4>
                                        <p className=" text-muted">
                                        Secure your children’s education
                                        </p>
                                    </div>
                                    <Link className="learn-more-btn">Learn More</Link>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;