import React from 'react'
import { Link } from 'react-router-dom'
import UAE from '../../../imgs/UAE.png'
import USA from "../../../imgs/USA.png"
import INDIA from "../../../imgs/India.png"
import office from "../../../imgs/office.png"

export default function ArContact() {
  return (
    <div className="container mt-5" dir="rtl">
      <section className="d-flex flex-column align-items-center justify-content-center text-center py-5 bg-white">
        <span
          className="mb-4 rounded-pill shadow-sm text-dark fw-normal"
          style={{ cursor: 'default', fontSize: '1.2rem' }}
        >
          <span className="d-inline-block p-2 shadow-lg rounded-3">
            تواصل معنا
          </span>
        </span>
        <h1 className="fw-bold display-5" style={{ color: 'gray' }}>
          اكتشف كيف تترجم خبرتنا إلى نتائج ملموسة
        </h1>
        <p className="text-muted mt-3 fs-5">
          تعمق في كل مشروع من خلال دراسات الحالة الشاملة التي توضح التحديات والاستراتيجيات والنتائج
        </p>
      </section>
      <section className="bg-white py-5 text-center">
        <span
          className="mb-4 rounded-pill shadow-sm text-dark fw-normal"
          style={{ cursor: 'default', fontSize: '1.2rem' }}
        >
          <span className="d-inline-block p-2 shadow-lg rounded-3">
            مواقعنا
          </span>
        </span>
        <div className="row justify-content-center mt-5 text-end">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="icon-container">
                <img src={UAE} alt="الإمارات" className="opacity-60" />
              </span>
              <h5 className="fw-bold me-3">الإمارات</h5>
            </div>
            <p className="text-muted fw-bold">
              وورد وركس للذكاء الاصطناعي - الشرق الأوسط
            </p>
            <p>
              <span>
                <img
                  src={office}
                  alt="مكتب"
                  width="30"
                  height="30"
                  className="opacity-60"
                />
              </span>
              منصة ميدان، الطابق السادس، طريق ميدان، ند الشبا، دبي، الإمارات.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="icon-container">
                <img src={INDIA} alt="الهند" className="opacity-60" />
              </span>
              <h5 className="fw-bold me-3">الهند</h5>
            </div>
            <p className="text-muted fw-bold">
              دبليو دبليو إيه آي للاستشارات وحلول تكنولوجيا المعلومات الخاصة
            </p>
            <p>
              <span>
                <img
                  src={office}
                  alt="مكتب"
                  width="30"
                  height="30"
                  className="icon-muted"
                />
              </span>
              1161، 127A، طريق بريكلينغ، كيلباوك، بيرامبور بوراساوالكام، تشيناي-600010، تاميل نادو، الهند.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="icon-container d-flex align-items-center justify-content-center">
                <img src={USA} alt="أمريكا" className="icon-muted" />
              </span>
              <h5 className="fw-bold me-3">الولايات المتحدة</h5>
            </div>
            <p className="text-muted fw-bold">وورد وركس للذكاء الاصطناعي</p>
            <p>
              <span>
                <img
                  src={office}
                  alt="مكتب"
                  width="30"
                  height="30"
                  className="icon-muted"
                />
              </span>
              131 كونتيننتال درايف، جناح 305، نيوارك، ديلاوير 19713، نيو كاسل، الولايات المتحدة.
            </p>
          </div>
        </div>
      </section>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="contact-us-container p-4 bg-white rounded shadow-lg mb-5">
            <h2 className="text-center mb-4">تواصل معنا</h2>
            <form>
              <div className="row mb-3 text-end">
                <div className="col-md-6">
                  <label htmlFor="fullName" className="form-label fw-bold">
                    الاسم الكامل*
                  </label>
                  <input
                    type="text"
                    className="form-control text-end"
                    id="fullName"
                    placeholder="لنخاطبك بشكل صحيح"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="companyName" className="form-label fw-bold">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    className="form-control text-end"
                    id="companyName"
                    placeholder="لنخصّص خدماتنا لاحتياجات عملك"
                  />
                </div>
              </div>
              <div className="row mb-3 text-end">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-bold">
                    البريد الإلكتروني*
                  </label>
                  <input
                    type="email"
                    className="form-control text-end"
                    id="email"
                    placeholder="لنتواصل معك بسرعة"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="referrer" className="form-label fw-bold">
                    من الذي رشّحنا لك؟
                  </label>
                  <input
                    type="text"
                    className="form-control text-end"
                    id="referrer"
                    placeholder="لشكره على الثقة"
                  />
                </div>
              </div>
              <div className="mb-3 text-end">
                <label htmlFor="phoneNumber" className="form-label fw-bold">
                  رقم الهاتف*
                </label>
                <input
                  type="text"
                  className="form-control text-end"
                  id="phoneNumber"
                  placeholder="رقم هاتفك للتواصل"
                />
              </div>
              <div className="mb-3 text-end">
                <label htmlFor="message" className="form-label fw-bold">
                  الرسالة
                </label>
                <textarea
                  className="form-control text-end"
                  id="message"
                  rows="4"
                  placeholder="أخبرنا المزيد عن طلبك لنوصل طلبك للزميل المختص"
                ></textarea>
              </div>
              <div className="form-check mb-3 text-end">
                <input className="form-check-input" type="checkbox" id="privacyPolicy" />
                <label className="form-check-label" htmlFor="privacyPolicy">
                  أوافق على{' '}
                  <Link to="#" className="text-primary">
                    سياسة الخصوصية
                  </Link>{' '}
                  ومعالجة بياناتي الشخصية.
                </label>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg text-white"
                  style={{ backgroundColor: '#FF007B' }}
                >
                  جدولة اجتماع
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
