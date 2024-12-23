import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../imgs/brain.png'
import tele from '../../../imgs/telephone.png'
import mail from '../../../imgs/mail.png'
import office from "../../../imgs/office.png"

export default function EnFooter() {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link className="mb-3 navbar-brand d-flex align-items-center" to="#">
              <img
                src={logo}
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top me-3"
              />
              WORDWORKS <span style={{ color: 'blue' }}>AI</span>
            </Link>
            <p>
              <i className="bi bi-telephone "></i>
              <span><img src={tele} alt="telephone" width="20" height="20" /></span> +971 5816 14745<br />
              <i className="bi bi-telephone "></i>
              <span><img src={tele} alt="telephone" width="20" height="20" /></span> +91 90423 14745
            </p>
            <p>
              <i className="bi bi-envelope "></i>
              <span><img src={mail} alt="email" width="20" height="20" /></span>
              <a className='ms-2 text-decoration-none text-black' href="mailto:talktoai@wordworksai.com">talktoai@wordworksai.com</a>
            </p>
            <p>
              <i className="bi bi-geo-alt "></i>
              <span><img src={office} alt="office" width="20" height="20" /></span> India | UAE | Saudi Arabia | Australia
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-dark  text-decoration-none">Products</Link></li>
              <li><Link to="/industries" className="text-dark text-decoration-none">Industries</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
              <li><Link to="/blog" className="text-dark text-decoration-none">Blog</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-dark text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Products</h5>
            <ul className="list-unstyled">
              <li><Link to="/ai-chatbot" className="text-dark text-decoration-none">AI Chatbot</Link></li>
              <li><Link to="/ai-voicebot" className="text-dark text-decoration-none">AI Voicebot</Link></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/erp-crm" className="text-dark text-decoration-none">ERP & CRM</Link></li>
              <li><Link to="/it-outsourcing" className="text-dark text-decoration-none">IT Outsourcing</Link></li>
            </ul>
          </div>
          <div className="col-md-12 mt-4 text-center">
            <h5 className="mb-3">Subscribe to our newsletter</h5>
            <form className="d-flex text-center justify-content-center">
              <input
                type="email"
                className="form-control me-2 "
                style={{ maxWidth: '300px' }}
                placeholder="Enter your email"
              />
              <button className="btn btn-primary " type="submit" style={{ backgroundColor: '#FF007B' }}>
                Subscribe
              </button>
            </form>
            <div className="mt-3">
              <h6>Follow us on</h6>
              <Link to="https://linkedin.com" className="me-3 text-dark">
                <i className="fa-brands fa-linkedin me-1"></i>
              </Link>
              <Link to="https://instagram.com" className="me-3 text-dark">
                <i className="fa-brands fa-instagram me-1"></i>
              </Link>
              <Link to="https://twitter.com" className="text-dark">
                <i className="fa-brands fa-twitter me-1"></i>
              </Link>
            </div>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-center">
          <li>
            <Link to="/en" className="text-dark m-2">
              English
            </Link>
          </li>
          <li>
            <Link to="/ar" className="text-dark m-2">
              العربية
            </Link>
          </li>
        </ul>
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 WordWorks AI, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
