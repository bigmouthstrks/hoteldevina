import React from 'react';
import './Events.css';

const EventsSection: React.FC = () => (
    <section className="events-section">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-7">
                    <h2 className="fw-bold" data-aos="fade-up">Eventos</h2>
                    <p data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="100">
                    <div className="event-card">
                        <a href="#" className="mb-4 d-block"><img src="./images/img_1.jpg" alt="Event" className="img-fluid" /></a>
                        <div className="event-body">
                            <span className="event-date">Fecha ejemplo</span>
                            <h2 className="event-title"><a href="#">Lorem ipsum dolor sit amet...</a></h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="200">
                    <div className="event-card">
                        <a href="#" className="mb-4 d-block"><img src="./images/img_2.jpg" alt="Event" className="img-fluid" /></a>
                        <div className="event-body">
                            <span className="event-date">Fecha ejemplo</span>
                            <h2 className="event-title"><a href="#">Example title</a></h2>
                            <p>Separated they live in Bookmarksgrove...</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 post" data-aos="fade-up" data-aos-delay="300">
                    <div className="event-card">
                        <a href="#" className="mb-4 d-block"><img src="./images/img_3.jpg" alt="Event" className="img-fluid" /></a>
                        <div className="event-body">
                            <span className="event-date">Fecha ejemplo</span>
                            <h2 className="event-title"><a href="#">Example title</a></h2>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default EventsSection;