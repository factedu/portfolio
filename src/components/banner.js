import React from "react";
import Image from './image';


const BannerSection = () => (
    <div className="site-banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 site-title">
                    <h3 className="title-text">Hay</h3>
                    <h1 className="title-text text-uppercase">I am Ravi</h1>
                    <h4 className="title-text text-uppercase">Senior Full Stack Web Developer</h4>
                    <div className="site-buttons">
                        <div className="d-flex flex-row flex-wrap">
                            <button type="button" className="btn button primary-button mr-4 text-uppercase">Hire Me</button>
                            <button type="button" className="btn button secondary-button text-uppercase">Get CV</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 banner-image">
                   <Image/>
                </div>
            </div>
        </div>
    </div>
)

export default BannerSection;