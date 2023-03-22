import './Website.scss';
import React, { useState, useCallback } from "react";
import fashionPic from './img/fashion-girlie.png';
import { gsap } from "gsap";
function Story(){
    let boldFont = {
        fontFamily: 'Recoleta Bold, cursive',
    };
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {color: "#6D94DC", scale: 1.2});
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: "white", scale: 1})
    }
    return(
        <div className = 'container'>
            <div className = 'left-half'>
            <h2 className = 'left-float-heading' onMouseEnter = {onEnter} onMouseLeave={onLeave}>high class fashion made out of <span style = {boldFont}>recycled materials</span></h2>
                <p className = 'about-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className = 'fashion-pic'>
                <img className = 'pic-adjustments-story' src = {fashionPic} />
            </div>
        </div>
    );
}
export default Story;