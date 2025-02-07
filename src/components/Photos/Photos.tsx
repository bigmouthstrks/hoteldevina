import React from 'react';
import './Photos.css';

const PhotosSection: React.FC = () => (
    <section className="photos-section py-5 bg-light">
        <div className="container">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-8">
                    <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">Photos</h2>
                    <p className="lead" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="home-slider" data-aos="fade-up" data-aos-delay="200">
                        <div className="d-flex gap-3 overflow-auto pb-4">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                <div key={num} className="slider-item flex-shrink-0">
                                    <a href={`./images/slider-${num}.jpg`} data-fancybox="gallery" data-caption="Caption for this image">
                                        <img src={`./images/slider-${num}.jpg`} alt="Gallery item" className="img-fluid rounded-3" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PhotosSection;