import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../imgs/brain.png'
import tele from '../../../imgs/telephone.png'
import mail from '../../../imgs/mail.png'
import office from "../../../imgs/office.png"

export default function ArFooter() {
  return (
    <>
      <footer className="bg-white text-dark py-4" style={{ direction: 'rtl' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link className="mb-3 navbar-brand d-flex align-items-center" to="#">
                <span style={{ color: 'blue' }}>AI</span>WORDWORKS
                <img
                  src={logo}
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top me-3"
                />
              </Link>
              <p>
                <i className="me-2"></i>
                00971581614745<span><img src={tele} alt="هاتف" width="20" height="20" /></span><br />
                <i className="me-2"></i>
                00919042314745<span><img src={tele} alt="هاتف" width="20" height="20" /></span>
              </p>
              <p>
                <i ></i>
                <span className="me-2"><img src={mail} alt="بريد إلكتروني" width="20" height="20" /></span>
                <a className="me-2 text-decoration-none text-black" href="mailto:talktoai@wordworksai.com">
                  talktoai@wordworksai.com
                </a>
              </p>
              <p>
                <i ></i>
                <span className="me-2"><img src={office} alt="مكتب" width="20" height="20" /></span>
                الهند | الإمارات | السعودية | أستراليا
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="mb-3 me-5">الشركة</h5>
              <ul className="list-unstyled">
                <li><Link to="/products" className="text-dark text-decoration-none">المنتجات</Link></li>
                <li><Link to="/industries" className="text-dark text-decoration-none">الصناعات</Link></li>
                <li><Link to="/about" className="text-dark text-decoration-none">عن الشركة</Link></li>
                <li><Link to="/blog" className="text-dark text-decoration-none">المدونة</Link></li>
                <li><Link to="/contact" className="text-dark text-decoration-none">اتصل بنا</Link></li>
                <li><Link to="/privacy-policy" className="text-dark text-decoration-none">سياسة الخصوصية</Link></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5 className="mb-3 me-5">المنتجات</h5>
              <ul className="list-unstyled">
                <li><Link to="/ai-chatbot" className="text-dark text-decoration-none">روبوت الدردشة الذكي</Link></li>
                <li><Link to="/ai-voicebot" className="text-dark text-decoration-none">روبوت الصوت الذكي</Link></li>
              </ul>
            </div>

            <div className="col-md-2">
              <h5 className="mb-3 me-5">الخدمات</h5>
              <ul className="list-unstyled">
                <li><Link to="/erp-crm" className="text-dark text-decoration-none">نظام ERP و CRM</Link></li>
                <li><Link to="/it-outsourcing" className="text-dark text-decoration-none">الاستعانة بمصادر IT</Link></li>
              </ul>
            </div>

            <div className="col-md-12 mt-4 text-center">
              <h5 className="mb-3">اشترك في نشرتنا الإخبارية</h5>
              <form className="d-flex text-center justify-content-center">
                <input
                  type="email"
                  className="form-control ms-2"
                  style={{ maxWidth: '300px' }}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="btn btn-primary" type="submit" style={{ backgroundColor: '#FF007B' }}>
                  اشتراك
                </button>
              </form>
              <div className="mt-3">
                <h6 className='me-5'>تابعنا على</h6>
                <Link to="https://linkedin.com" className="ms-3 text-dark me-5">
                  <i className="fa-brands fa-linkedin ms-1"></i>
                </Link>
                <Link to="https://instagram.com" className="ms-3 text-dark">
                  <i className="fa-brands fa-instagram ms-1"></i>
                </Link>
                <Link to="https://twitter.com" className="text-dark">
                  <i className="fa-brands fa-twitter ms-1"></i>
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
            <p className="mb-0">© 2024 وورد ووركس AI، جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
