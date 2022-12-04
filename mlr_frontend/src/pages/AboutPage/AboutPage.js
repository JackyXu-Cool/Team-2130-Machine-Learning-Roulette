import React from 'react';
import CustomNavBar from '../../components/CustomNavBar/CustomNavBar';

import './AboutPage.css';
import HomeButton from "../../components/HomeButton/HomeButton";

// TODO: Log In button is disabled for now.
const HomePage = () => {
    const navElem = [{"title": "About", "href":"/about"}, {"title": "Log In", "href":"/auth"}, {"title": "Upload", "href":"/upload"} ];
    return (
        <div className="main">
            <CustomNavBar elems={navElem} />
            <div className="about_title">
                <p>About</p>
            </div>
            <div className="subheading">
                <p>Machine Learning Roulette</p>
            </div>
            <div className="text">
                <p>Our project is to create a website that allows users to receive an evaluation on the performance
                    of selected machine learning algorithms on the dataset (csv form) which the users upload.
                    In front-end, the website accepts a data set, selects a model or models,
                    and displays statistical model quality results based on other parameter selection.
                    For back-end, we will run the various models, as configured, on the uploaded dataset
                    and offer aggregated quality metrics for the website to render in an informative way.</p>
            </div>
            <HomeButton />
        </div>
    );
};

export default HomePage;
