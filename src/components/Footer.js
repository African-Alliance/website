import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-overlay text-success">
        </div>
      </div>
      <div className="footer-content">
        <div className='subscribe d-flex flex-column justify-content-around h-100 flex-md-row justify-content-md-around py-md-3'>
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
          <div className='col-md-3 py-4 py-md-1'>
            <img alt='african alliance logo' />
            <p >Our core competencies are a creative combination of Protection (Term Assurance and Group Linkfe),
              Savings and Investment Products and over the years, African Alliance has estabLinkshed a solid
              reputation for excellent customer service and prompt claims settlement.
            </p>
            <h5>We Are African AlLinkance Plc</h5>
          </div>
          <div className='col-md-3 py-4 py-md-1'>
            <h5>Products</h5>
            <div className='content-list'>
              <Link className='content-item'>Esusu</Link>
              <Link className='content-item'>Annuity Plan</Link>
              <Link className='content-item'>Children Education Plan</Link>
              <Link className='content-item'>Mortgage Protection Plan</Link>
              <Link className='content-item'>AlLinkance Investment Plus Plan</Link>
              <Link className='content-item'>MoneyAppreciation Plan</Link>
              <Link className='content-item'>Smart Kid Education</Link>
              
            </div>
          </div>
          <div className='col-md-3 py-4 py-md-1'>
            <h5>Resources</h5>
            <div className='content-list'>
              <Link className='content-item'>News</Link>
              <Link className='content-item'>Customer Complaints Policy</Link>
              <Link className='content-item'>Claims</Link>
              <Link className='content-item'>Complaints</Link>
              <Link className='content-item'>Security Trading Policy</Link>
              <Link className='content-item'>Privacy Policy</Link>
              <Link className='content-item'>Whistle Blower</Link>
              <Link className='content-item'>BCP Policy</Link>
              <Link className='content-item'>Branch Locator</Link>
            </div>
          </div>
          <div className='col-md-3'>
            <h5>Company</h5>
            <div className='content-list'>
              <Link className='content-item'>Contact us</Link>
              <Link className='content-item'>About</Link>
              <Link className='content-item'>Our Values</Link>
              <Link className='content-item'></Link>
            </div>
          </div>
        </div>
        <div className='socials d-flex flex-column-reverse flex-md-row justify-content-around pt-5 pb-3'>
          <div className='pt-3 pt-md-0'>
            <p className='text-muted'>Copyright &copy; 2018 African Alliance Insurance Plc. All rights reserved.</p>
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
