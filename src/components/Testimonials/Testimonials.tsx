import React from 'react';
import './Testimonials.css';

const TestimonialsSection: React.FC = () => (
    <section className="testimonials-section py-5 bg-light">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="fw-bold display-5">People Say</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[1, 2, 3].map((num, index) => (
                                <div key={num} className={`carousel-item text-center ${index === 0 ? 'active' : ''}`}>
                                    <div className="testimonial-img-wrapper mb-4">
                                        <img
                                            src={`./images/person_${num}.jpg`}
                                            alt={`Testimonial ${num}`}
                                            className="rounded-circle testimonial-img"
                                        />
                                    </div>
                                    <blockquote className="blockquote">
                                        <p className="mb-0 fs-5">&ldquo;Example.&rdquo;</p>
                                    </blockquote>
                                    <footer className="blockquote-footer mt-3">
                                        <em>&mdash; Example</em>
                                    </footer>
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default TestimonialsSection;