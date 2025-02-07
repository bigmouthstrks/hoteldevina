import React from 'react';
import './Rooms.css';

const RoomsSection: React.FC = () => (
    <section className="rooms-section py-5">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-8">
                    <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">Rooms &amp; Suites</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <a href="#" className="room text-decoration-none">
                        <figure className="img-wrap overflow-hidden rounded">
                            <img src="./images/img_1.jpg" alt="Single Room" className="img-fluid" />
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2 className="h4 fw-bold">Single Room</h2>
                            <span className="text-uppercase letter-spacing-1">90$ / per night</span>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <a href="#" className="room text-decoration-none">
                        <figure className="img-wrap overflow-hidden rounded">
                            <img src="./images/img_2.jpg" alt="Family Room" className="img-fluid" />
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2 className="h4 fw-bold">Family Room</h2>
                            <span className="text-uppercase letter-spacing-1">120$ / per night</span>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up">
                    <a href="#" className="room text-decoration-none">
                        <figure className="img-wrap overflow-hidden rounded">
                            <img src="./images/img_3.jpg" alt="Presidential Room" className="img-fluid" />
                        </figure>
                        <div className="p-3 text-center room-info">
                            <h2 className="h4 fw-bold">Presidential Room</h2>
                            <span className="text-uppercase letter-spacing-1">250$ / per night</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default RoomsSection;