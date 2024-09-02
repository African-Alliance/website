import FadeInSection from "./FadeInSection";
import '../styles/Products.css'
import invenstmentPlus from '../assets/investment plus.jpg';
import investment from '../assets/investment.jpg';
import incomeInvestment from '../assets/income investment plan.jpg';
import groupInvestment from '../assets/group investment.jpg'
import termAssurance from '../assets/Term Assurance.jpg'
import termAssurance2 from '../assets/Term Assurance 2.jpg'
import moneyAppreciation from '../assets/money appreciation plan.jpg';
import smartKid from '../assets/smart kid education plan.jpg';
import childrenEducation from '../assets/children education plan.jpg';
import image from '../assets/testimage.jpg'
import { Link } from "react-router-dom";

const Products = () => {
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

                        <div className="col-md-6  col-lg-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={investment} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Investment Plus Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Earn interest on savings towards
                                            a business or a special project
                                        </p>

                                        <Link to="/alliance-investment-plus" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={invenstmentPlus} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Investment Plus Special Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Earn interest on savings towards
                                            a business or a special project
                                        </p>
                                        <Link to="/investment-special" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={termAssurance} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Term Assurance Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Invest to fund your children’s
                                            future education tuition and lifestyle
                                        </p>
                                        <Link to="/term-assurance" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>

                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={moneyAppreciation} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Money Appreciation Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Grow your investments while
                                            insuring your life at the same time
                                        </p>
                                        <Link to="/money-appreciation" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={incomeInvestment} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Income Investment Plan
                                        </h3>
                                        <p className=" text-muted">
                                            A savings plan that has basic life cover
                                        </p>
                                        <Link to="/income-investment" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={smartKid} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Smart Kid Educational Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Secure your children’s education
                                        </p>
                                        <Link to="/smart-kid-education" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>

                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={groupInvestment} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className=" mb-2">
                                            Group Alliance Income Investment Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Secure your children’s education
                                        </p>
                                        <Link to="/group-investment" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}>
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                        <div className="col-md-6  col-lg-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <FadeInSection>
                                <div className="product d-flex flex-column align-items-center">
                                    <img className="w-100" src={childrenEducation} alt="product plan" />
                                    <div className="col-12 product-text">
                                        <h3 className="h3 mb-2">
                                            Children Education Plan
                                        </h3>
                                        <p className=" text-muted">
                                            Secure your children’s education
                                        </p>
                                        <Link to="/children-education" className="learn-more-btn"
                                            onClick={() => {
                                                window.scroll({
                                                    top: 0,
                                                    left: 0,
                                                    behavior: "smooth",
                                                });
                                            }}
                                        >
                                            LEARN MORE
                                            <span class="material-icons ">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </FadeInSection>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;