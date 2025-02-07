import React from 'react';
import './Reservations.css';

const ReservationSection: React.FC = () => (
    <section className="reservation-section position-relative py-5">
        <div className="container position-relative z-index-1">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-start" data-aos="fade-up">
                    <h2 className="fw-bold display-5">A Best Place To Stay. Reserve Now!</h2>
                </div>
                <div className="col-12 col-md-6 text-center text-md-end" data-aos="fade-up" data-aos-delay="200">
                    <a href="reservation.html" className="btn btn-outline-light btn-lg py-3 px-5">
                        Reserve Now
                    </a>
                </div>
            </div>
        </div>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </section>
);

export default ReservationSection;