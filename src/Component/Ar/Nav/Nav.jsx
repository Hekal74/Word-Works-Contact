import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/brain.png';
import langlogo from '../../../imgs/earth-globe.png';

export default function ArNav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        dir="rtl"
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          height: '4.5rem',
        }}
      >
        <div className="container-fluid">
          <div className="dropdown me-3">
            <button
              className="btn"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                padding: 0,
                border: 'none',
                backgroundColor: 'transparent',
              }}
            >
              <img
                src={langlogo}
                alt="Language"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="languageDropdown"
              style={{
                minWidth: 'auto',
              }}
            >
              <li>
                <Link className="dropdown-item d-flex justify-content-between" to="/ar">
                  العربية <span>✔</span>
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/en">
                  English
                </Link>
              </li>
            </ul>
          </div>

          <Link className="navbar-brand d-flex align-items-center" to="#">
            <span style={{ color: 'blue' }}>AI</span> WORDWORKS
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navbar Links */}
            <ul className="navbar-nav mx-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  المنتجات
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  الخدمات
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  الصناعات
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="companyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الشركة
                </Link>
                <ul className="dropdown-menu w-auto" aria-labelledby="companyDropdown">
                  <li>
                    <Link className="dropdown-item" to="#" dir="rtl">
                      عن الشركة
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      الشركاء
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      التوظيف
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="resourcesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  الموارد
                </Link>
                <ul className="dropdown-menu w-100" aria-labelledby="resourcesDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      المدونة
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex mt-3 mt-lg-0">
              <button className="btn btn-primary" type="button" style={{ backgroundColor: '#FF007B' }}>
                احصل علي نموذج مجاني
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
