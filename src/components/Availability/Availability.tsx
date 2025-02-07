import React from 'react';
import './Availability.css';

const AvailabilityForm: React.FC = () => (
    <section className="availability-section py-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="availability-form bg-white p-4 rounded shadow" data-aos="fade-up" data-aos-offset="-200">
                        <form action="#">
                            <div className="row g-3">
                                <div className="col-md-6 col-lg-3">
                                    <label htmlFor="checkin_date" className="form-label fw-bold">Check In</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                                        <input type="date" id="checkin_date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <label htmlFor="checkout_date" className="form-label fw-bold">Check Out</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                                        <input type="date" id="checkout_date" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="row g-2">
                                        <div className="col-6">
                                            <label htmlFor="adults" className="form-label fw-bold">Adults</label>
                                            <div className="input-group">
                                                <span className="input-group-text"><i className="bi bi-chevron-down"></i></span>
                                                <select id="adults" className="form-select">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="children" className="form-label fw-bold">Children</label>
                                            <div className="input-group">
                                                <span className="input-group-text"><i className="bi bi-chevron-down"></i></span>
                                                <select id="children" className="form-select">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-end">
                                    <button type="submit" className="btn btn-primary w-100 py-2">Check Availability</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AvailabilityForm;