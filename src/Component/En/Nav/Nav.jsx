import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/brain.png';
import langlogo from '../../../imgs/earth-globe.png';

export default function EnNav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          height: '4.5rem',
          position: 'fixed',  // لجعلها ثابتة
          top: 0,  // لجعلها في الأعلى
          width: '100%',  // لتغطية العرض بالكامل
          zIndex: 9999,  // لجعلها فوق العناصر الأخرى
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="#">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top ms-5 me-3"
            />
            WORDWORKS <span style={{ color: 'blue' }}>AI</span>
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
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
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
                  Company
                </Link>
                <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                  <li>
                    <Link className="dropdown-item" to="#about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#partners">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#careers">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#contact">
                      Contact Us
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
                  Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                  <li>
                    <Link className="dropdown-item" to="#blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button
                className="btn btn-primary me-2"
                type="button"
                style={{ backgroundColor: '#FF007B' }}
              >
                Get a Free POC
              </button>
              <div className="dropdown me-3 position-relative">
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
                    <Link className="dropdown-item" to="/ar">
                      العربية
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item d-flex justify-content-between" to="/en">
                      English <span>✔</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
