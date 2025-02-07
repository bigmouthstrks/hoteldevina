import React from 'react';
import './Menu.css';

const MenuSection: React.FC = () => (
    <section className="menu-section position-relative py-5" style={{ backgroundImage: "url('./images/hero_3.jpg')" }}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container position-relative z-index-1">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-md-8">
                    <h2 className="display-5 fw-bold text-white mb-4" data-aos="fade">Our Restaurant Menu</h2>
                    <p className="lead text-white" data-aos="fade" data-aos-delay="100">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                </div>
            </div>
            <div className="food-menu-tabs" data-aos="fade">
                <ul className="nav nav-pills justify-content-center mb-5" id="menuTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active fw-bold text-uppercase" id="mains-tab" data-bs-toggle="tab" data-bs-target="#mains" type="button" role="tab" aria-controls="mains" aria-selected="true">Mains</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold text-uppercase" id="desserts-tab" data-bs-toggle="tab" data-bs-target="#desserts" type="button" role="tab" aria-controls="desserts" aria-selected="false">Desserts</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold text-uppercase" id="drinks-tab" data-bs-toggle="tab" data-bs-target="#drinks" type="button" role="tab" aria-controls="drinks" aria-selected="false">Drinks</button>
                    </li>
                </ul>
                <div className="tab-content py-5" id="menuTabContent">
                    <div className="tab-pane fade show active" id="mains" role="tabpanel" aria-labelledby="mains-tab">
                        <div className="row g-4">
                            <div className="col-md-6">
                                {[20, 35, 15].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}.00</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Menu Item {index + 1}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {[10, 8.35, 22].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Menu Item {index + 4}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="desserts" role="tabpanel" aria-labelledby="desserts-tab">
                        <div className="row g-4">
                            <div className="col-md-6">
                                {[11, 72, 26].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}.00</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Dessert Item {index + 1}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {[42, 7.35, 22].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Dessert Item {index + 4}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="drinks-tab">
                        <div className="row g-4">
                            <div className="col-md-6">
                                {[32, 14, 93].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}.00</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Drink Item {index + 1}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-6">
                                {[18, 38.35, 69].map((price, index) => (
                                    <div key={index} className="food-menu mb-5">
                                        <span className="d-block text-primary fs-4 fw-bold mb-3">${price}</span>
                                        <h3 className="text-white"><a href="#" className="text-white text-decoration-none">Drink Item {index + 4}</a></h3>
                                        <p className="text-white text-opacity-75">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default MenuSection;