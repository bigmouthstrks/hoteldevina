import React from 'react';
import './Welcome.css';

const WelcomeSection: React.FC = () => (
    <section className="welcome-section py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-7 ms-auto order-lg-2 mb-5" data-aos="fade-up">
                    <div className="image-wrapper position-relative">
                        <img src="./images/food-1.jpg" alt="Image" className="floating-image position-absolute" />
                        <img src="./images/img_1.jpg" alt="Image" className="img-fluid rounded" />
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                    <h2 className="display-5 fw-bold mb-4">Welcome!</h2>
                    <p className="mb-4 fs-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>
                        <a href="#" className="btn btn-primary btn-lg text-white py-2 me-3">Learn More</a>
                        <span className="me-3 fs-5"><em>or</em></span>
                        <a href="https://vimeo.com/channels/staffpicks/93951774" data-fancybox className="text-uppercase fs-5">See video</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default WelcomeSection;