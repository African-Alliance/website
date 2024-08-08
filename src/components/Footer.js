import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AAlogo from '../assets/AAI_Logo.png'
import AnnuityPlan from '../pages/AnnuityPlans';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-overlay text-success">
        </div>
      </div>
      <div className="footer-content d-flex flex-column">
        <div className='subscribe d-flex flex-column justify-content-around h-100 flex-md-row  py-md-3'>
          <div className='subscribe-text col-md-6'>
            <h3 >Subscribe To Our Newsletter</h3>
            <p >Sign up to recieve African Alliance Insurance Plc Newsletter today and never miss the latest industry news, AAI offers and more.</p>
          </div>
          <div className='col-md-6'>
            <form class="d-flex">
              <div class="">
                <input type="email" class="form-control input-box" placeholder="Enter your email..." />
              </div>
              <div class="">
                <button type="submit" class="btn subscribe-btn mx-2 mb-3">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className='contents d-flex flex-column flex-md-row my-5'>
          <div className='logo-section col-md-3 py-4 py-md-1'>
            <img src={AAlogo} alt='african alliance logo' />
            <p className='logo-section-text'>Our core competencies are a creative combination of Protection (Term Assurance and Group Linkfe),
              Savings and Investment Products and over the years, African Alliance has estabLinkshed a solid
              reputation for excellent customer service and prompt claims settlement.
            </p>
            <h5>We Are African AlLinkance Plc</h5>
          </div>
          <div className='col-md-3 py-4 py-md-1'>
            <h5>Products</h5>
            <div className='content-list'>
              <Link className='content-item'><span>Esusu</span></Link>
              <Link to="/annuity" className='content-item'
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}><span>Annuity Plan</span>
              </Link>
              <Link className='content-item'><span>Children Education Plan</span></Link>
              <Link className='content-item'><span>Mortgage Protection Plan</span></Link>
              <Link className='content-item'><span>AlLinkance Investment Plus Plan</span></Link>
              <Link className='content-item'><span>MoneyAppreciation Plan</span></Link>
              <Link className='content-item'><span>Smart Kid Education</span></Link>

            </div>
          </div>
          <div className='col-md-3 py-4 py-md-1'>
            <h5>Resources</h5>
            <div className='content-list'>
              <Link className='content-item'><span>News</span></Link>
              <Link className='content-item'><span>Customer Complaints Policy</span></Link>
              <Link className='content-item'><span>Claims</span></Link>
              <Link className='content-item'><span>Complaints</span></Link>
              <Link className='content-item'><span>Security Trading Policy</span></Link>
              <Link className='content-item'><span>Privacy Policy</span></Link>
              <Link className='content-item'><span>Whistle Blower</span></Link>
              <Link className='content-item'><span>BCP Policy</span></Link>
              <Link className='content-item'><span>Branch Locator</span></Link>
            </div>
          </div>
          <div className='col-md-3'>
            <h5>Company</h5>
            <div className='content-list'>
              <Link className='content-item'><span>Contact us</span></Link>
              <Link className='content-item'><span>About</span></Link>
              <Link className='content-item'><span>Our Values</span></Link>
              <Link className='content-item'></Link>
            </div>
          </div>
        </div>
        <div className='socials col-12 d-flex flex-column-reverse flex-md-row  justify-content-around pt-5 pb-3'>
          <div className='pt-3 pt-md-0 text-start'>
            <p className='text-muted text-start'>Copyright &copy; 2018 African Alliance Insurance Plc. All rights reserved.</p>
          </div>
          <div className='social-links d-flex justify-content-center justify-content-md-around'>
            <a href='https://www.facebook.com/AAInsurancePLC/' target='_blank' rel="noreferrer" className='social-link'><FontAwesomeIcon className='icon' icon={faFacebookF} /></a>
            <a href='https://twitter.com/AAInsurancePlc' target='_blank' rel="noreferrer" className='social-link'><FontAwesomeIcon className='icon' icon={faXTwitter} /></a>
            <a href='https://www.instagram.com/africanalliance/' target='_blank' rel="noreferrer" className='social-link'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
            <a href='https://www.linkedin.com/company/african-alliance-insurance-plc/' target='_blank' rel="noreferrer" className='social-link'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
