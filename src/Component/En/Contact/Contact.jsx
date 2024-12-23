import React from 'react';
import { Link } from 'react-router-dom';
import UAE from '../../../imgs/UAE.png';
import USA from "../../../imgs/USA.png";
import INDIA from "../../../imgs/India.png";
import office from "../../../imgs/office.png";

export default function EnContact() {
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex flex-column align-items-center justify-content-center text-center py-5 bg-white">
          <span className="mb-4 rounded-pill shadow-sm text-dark fw-normal" style={{ cursor: 'default', fontSize: '1.2rem' }}>
            <span className="d-inline-block p-2 shadow-lg rounded-3">
              Contact Us
            </span>
          </span>
          <h1 className="fw-bold display-5" style={{ color: 'gray' }}>
            Explore How Our <br /> Expertise Translates <br /> into Tangible Results.
          </h1>
          <p className="text-muted mt-3 fs-5">
            Dive deep into each project with comprehensive case studies that outline <br />
            challenges, strategies, and outcomes.
          </p>
        </section>

        <section className="bg-white py-5 text-center">
          <span className="mb-4 rounded-pill shadow-sm text-dark fw-normal" style={{ cursor: 'default', fontSize: '1.2rem' }}>
            <span className="d-inline-block p-2 shadow-lg rounded-3">
              Locations
            </span>
          </span>
          <div className="row justify-content-center mt-5">
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-container"><img src={UAE} alt="UAE" className="opacity-60" /></span>
                <h5 className="fw-bold ms-3">U.A.E</h5>
              </div>
              <p className="text-muted fw-bold">
                Word Works AI Middle East L.L.C-FZ
              </p>
              <p>
                <span><img src={office} alt="office" width="30" height="30" className="opacity-60  " /></span>
                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-container"><img src={INDIA} alt="India" className="opacity-60" /></span>
                <h5 className="fw-bold ms-3">India</h5>
              </div>
              <p className="text-muted fw-bold">
                WWAI Consulting and IT <br /> solutions private limited
              </p>
              <p>
                <span><img src={office} alt="office" width="30" height="30" className="icon-muted me-2" /></span>
                1161, 127A, BRICLING ROAD, Kilpauk, Perambur Purasawalkam, Chennai-600010, Tamil Nadu, India.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center">
                <span className="icon-container d-flex align-items-center justify-content-center"><img src={USA} alt="USA" className="icon-muted" /></span>
                <h5 className="fw-bold ms-3">USA</h5>
              </div>
              <p className="text-muted fw-bold">
                Word Works AI INC
              </p>
              <p>
                <span><img src={office} alt="office" width="30" height="30" className="icon-muted me-2" /></span>
                131 Continental Dr, Suite 305, Newark, DE 19713, New Castle, USA.
              </p>
            </div>
          </div>
        </section>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-us-container p-4 bg-white rounded shadow-lg mb-5">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label fw-bold">
                      FULL NAME*
                    </label>
                    <input type="text" className="form-control" id="fullName" placeholder="So we know how to address you" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="companyName" className="form-label fw-bold">
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      placeholder="So we can tailor the services to your business needs"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold">
                      EMAIL*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="So we can respond promptly to your enquiry"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="referrer" className="form-label fw-bold">
                      WHO REFERRED YOU TO US?
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="referrer"
                      placeholder="So we can say thank you"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label fw-bold">
                    PHONE NUMBER*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Your contact number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
                  ></textarea>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="privacyPolicy" />
                  <label className="form-check-label" htmlFor="privacyPolicy">
                    I agree and consent to the{' '}
                    <Link to="#" className="text-primary">
                      privacy policy
                    </Link>
                    , its terms of processing of my personal data.
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg text-white"
                    style={{ backgroundColor: '#FF007B' }}
                  >
                    Schedule meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
