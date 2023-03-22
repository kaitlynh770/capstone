import './Website.scss';
import React, { useState, useCallback } from "react";
import headerPic from './img/tulips2.png';
import process1 from './img/classy1.png';
import process2 from './img/classy2.png';
import cloud from './img/thread.jpg';
import carding from './img/carding.jpg';
import loom from './img/loom.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";
function Process(){
    let [firstParagraph, showFirstParagraph] = useState(false);
    let [secondParagraph, showSecondParagraph] = useState(false);
    let [thirdParagraph, showThirdParagraph] = useState(false);
    let changeAlign = {
        alignSelf: "flex-end",
        justifyContent: "center",
        top: "28%"
    }
    let furtherDown = {
        top: "60%"
    }
    let specializedHeight = {
        height: "10%"
    }
    const onEnterLeft = ({ currentTarget }) => {
        gsap.to(currentTarget, {x: 300});
        var switchSomething = currentTarget.id;
        switch(switchSomething){
            case "20":
                showFirstParagraph(true);
                console.log("hi");
                break;
            case "3":
                showThirdParagraph(true);
                console.log("hereiam");
                break;
            default:
                console.log("what is going on in here")
                console.log(switchSomething);
        }
        // if(currentTarget.id = "1"){
        //     console.log("why are you in here, idk")
        // }
        // if(currentTarget.id = "3"){
        //     console.log("this should be in id 3")
        // }
    };
    const onEnterRight = ({ currentTarget }) => {
        gsap.to(currentTarget, {x: -300});
        if (currentTarget.id = "2"){
            showSecondParagraph(true);
        }
    }
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {x: 0});
        showThirdParagraph(false);
        showFirstParagraph(false);
        showSecondParagraph(false);
    };
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img className = 'header-pic' src = {headerPic} />
                <h1 className = 'process-header'>Process</h1>
                <div className = 'column'>
                    <img id = "20" onMouseEnter = {onEnterLeft} onMouseLeave={onLeave} className = 'pic-adjustments' src = {carding}/>
                    {firstParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph left-align'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu. {'\n'}
                    </p>)}           
                    <img id = "2" onMouseEnter = {onEnterRight} onMouseLeave = {onLeave} className='pic-adjustments' src = {cloud} />
                    {secondParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph right-align' style = {changeAlign} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.  {'\n'}
                    </p>)}
                    <img id = "3" onMouseOver = {onEnterLeft} onMouseLeave={onLeave} className = 'pic-adjustments' style = {specializedHeight} src = {loom} />   
                    {thirdParagraph && (
                    <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className = 'process-paragraph left-align' style = {furtherDown}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.  {'\n'}
                    </p>)}
                </div>
            </div>
        </div>
    );
}
export default Process;