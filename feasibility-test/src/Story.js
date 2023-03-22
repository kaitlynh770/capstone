import './Website.scss';
import React, { useState, useCallback } from "react";
import fashionPic from './img/fashion-girlie.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Story(){
    let boldFont = {
        fontFamily: 'Recoleta Bold, cursive',
    };
    return(
        <div className = 'container'>
            <div className = 'left-half'>
            <h2 data-aos = "fade-right" data-aos-duration = "1500" className = 'left-float-heading'>high class fashion made out of </h2>
            <h2 data-aos = "fade-left" data-aos-duration = "1500" data-aos-delay = "1500" className='left-float-heading' style = {boldFont}>recycled materials</h2>
                <p data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "3000" className = 'about-paragraph'>A sustainable and elegant piece of clothing produced by deploying various engineering techniques. Plastifashion aims to do something never before seen in the fashion industry: create high-end clothing out of recycled materials. With our dedication to the environment and a desire to make an impact in the world of high-fashion, Plastifashion is sure to shine a new light on recyclable materials.</p>
            </div>
            <div className = 'fashion-pic'>
                <img data-aos = "fade-up" data-aos-duration = "1500" data-aos-delay = "3000" className = 'pic-adjustments-story' src = {fashionPic} />
            </div>
        </div>
    );
}
export default Story;