import React from 'react';
import moonbase from '../../assets/moonbase.png';
import fitness from '../../assets/douevenliftbro.png';
import techblog from '../../assets/techblog.png';
import budget from '../../assets/budget.png';
import weather from '../../assets/weather.png';
import ezvibez from '../../assets/ez.png';

export default function Portfolio() {
    return (
        <div className="mt-3 pb-5 container" id="projects">
            <div className="post-heading text-center">
                <h3 className="display-4 font-weight-bold">Projects</h3>
                <hr className="w-75 mx-auto mb-5" />
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={moonbase} className="card-img-top" alt="Moonbase" />
                        <div className="card-body">
                            <h5 className="card-title">Moonbase</h5>
                            <p className="card-text">Finance forum with integrated stock data</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://guarded-chamber-67294.herokuapp.com/" className="btn btn-dark"
                                    target="_blank">Live
                                </a>
                                <a href="https://github.com/mushymane/moonbase" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={fitness} className="card-img-top" alt="Fitness Tracker" />
                        <div className="card-body">
                            <h5 className="card-title">Fitness Tracker</h5>
                            <p className="card-text">Stay fit by documenting your workouts</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://evening-tor-88716.herokuapp.com/" className="btn btn-dark"
                                    target="_blank">Live
                                </a>
                                <a href="https://github.com/mushymane/fitness-tracker" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={techblog} className="card-img-top" alt="Tech Blog" />
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">A mini blog site</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://damp-escarpment-99267.herokuapp.com/" className="btn btn-dark"
                                    target="_blank">Live
                                </a>
                                <a href="https://github.com/mushymane/tech-blog" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={budget} className="card-img-top" alt="Budget Tracker" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">Progressive web app that helps you track your expenses</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://safe-mountain-42147.herokuapp.com/" className="btn btn-dark"
                                    target="_blank">Live
                                </a>
                                <a href="https://github.com/mushymane/budget-tracker" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={weather} className="card-img-top" alt="Weather Forecast" />
                        <div className="card-body">
                            <h5 className="card-title">Weather Dashboard</h5>
                            <p className="card-text">View the weather forecast for cities around the world</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://mushymane.github.io/weather-dashboard/" className="btn btn-dark"
                                    target="_blank">Live
                                </a>
                                <a href="https://github.com/mushymane/weather-dashboard" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 pb-5">
                    <div className="card">
                        <img src={ezvibez} className="card-img-top" alt="EzVibez - lyrics analyzer" />
                        <div className="card-body">
                            <h5 className="card-title">EzVibez</h5>
                            <p className="card-text">Have your lyrics analyzed and get recommendations for similar songs.</p>
                            <div className="d-flex justify-content-around">
                                <a href="https://ghmurphy2.github.io/EzVibez/" className="btn btn-dark" target="_blank">Live</a>
                                <a href="https://github.com/ghmurphy2/EzVibez" className="btn btn-dark"
                                    target="_blank">Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn w-50 mx-auto mb-5 btn-dark btn-rounded" data-mdb-ripple-color="light">
                    <a href="https://github.com/mushymane" target="_blank">View My Github</a>
                </button>
            </div>
        </div>
    );
}