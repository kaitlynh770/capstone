import './Website.scss';
import React, { useState, useCallback } from "react";
import headerPic from './img/tulips2.png';
import process1 from './img/classy1.png';
import process2 from './img/classy2.png';
import cloud from './img/thread.jpg';
import carding from './img/carding.jpg';
import loom from './img/loom.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
import strips from './img/strips.jpeg';
import drill from './img/drill.jpeg';
import woven from './img/woven-fabric.jpeg'
import spindle from './img/spindle.JPEG'
import patterning from './img/patterning.jpeg'

function Process(){
    let [firstParagraph, showFirstParagraph] = useState(false);
    let [secondParagraph, showSecondParagraph] = useState(false);
    let [thirdParagraph, showThirdParagraph] = useState(false);
    let changeAlign = {
        alignSelf: "flex-end",
        justifyContent: "center",
        top: "10%"
    }
    let furtherDown = {
        top: "60%"
    }
    let specializedHeight = {
        height: "8%"
    }
    const onEnter = ({currentTarget}) => {
        let value = currentTarget.id;
        if(value%2 !=0){
            gsap.to(currentTarget, {x:300});
        }
        else{
            gsap.to(currentTarget, {x: -300});
        }
        switch(value){
            case "1": 
                showFirstParagraph(true);
                break;
            case "2": 
                console.log("in here")
                showSecondParagraph(true);
                break;
            
        }
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {x: 0});
        showThirdParagraph(false);
        showFirstParagraph(false);
        showSecondParagraph(false);
    };
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img className = 'header-pic' style = {specializedHeight}src = {headerPic} />
                <h1 className = 'process-header'>Process</h1>
                <div className = 'column'>
                    <img id = "1" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {strips} />
                    {firstParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph left-align'>
                        The root of Plastifashion itself: Plastic. Wanting to change this harmful and stubborn material into something useful, we collected plastic cups over the course of a couple of weeks. After collecting used bottles, we hand washed them to ensure our fabric would be clean and maintain a transparent appearance. We then hand cut the bottles in a spiral way to get one consistent strip that can easily latch onto our rod that we use for melting the material.
                    </p>)}
                    <img id = "2" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {drill} />
                    {secondParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph right-align' style = {changeAlign}>
                        Using a Black Decker heat gun, we melt the strip onto a thick, hand held wire by spinning the wire around and applying heat on all sides. Using a drill with a U shaped wire insert, we dip one edge of the U wire into the fluid plastic and start to spin it quickly. This is a timely process, but it produces a beautiful and gleaming thread unlike any other. 
                    </p>)}
                    <img id = "3" onMouseEnter = {onEnter} onMouseLeave={onLeave} className = 'pic-adjustments' src = {carding}/>
                    {thirdParagraph && (
                        <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph left-align' style = {furtherDown}>
                            Once gathering enough material, we started to card it to make the material 
                        </p>
                    )}
                    <img id = "4" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {cloud} />
                    <img id ="5" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className = 'pic-adjustments' src = {spindle} />
                    {/* {secondParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph right-align' style = {changeAlign} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.  {'\n'}
                    </p>)} */}
                    <img id = "6" onMouseEnter = {onEnter} onMouseLeave={onLeave} className='pic-adjustments' src = {patterning} />
                    <img id = "7" onMouseEnter = {onEnter} onMouseLeave={onLeave} className = 'pic-adjustments' style = {specializedHeight} src = {loom} />   
                    {/* {thirdParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph left-align' style = {furtherDown}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.  {'\n'}
                    </p>)} */}
                    <img id = "8" onMouseEnter = {onEnter} onMouseLeave={onLeave} className='pic-adjustments' src = {woven} />
                </div>
            </div>
        </div>
    );
}
export default Process;