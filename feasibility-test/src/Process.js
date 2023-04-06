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
    let [fourthParagraph, showFourthParagraph] = useState(false);
    let [fifthParagraph, showFifthParagraph] = useState(false);
    let [sixthParagraph, showSixthParagraph] = useState(false);
    let changeAlign = {
        alignSelf: "flex-end",
        justifyContent: "center",
        top: "10%"
    }
    let furtherDown = {
        top: "25%"
    }
    let changeAlignFourth = {
        alignSelf: "flex-end",
        justifyContent: "center",
        top: "35%"
    }
    let furtherDownFifth = {
        top: "45%"
    }
    let changeAlignSixth = {
        alignSelf: "flex-end",
        justifyContent: "center",
        top: "57%"
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
                showSecondParagraph(true);
                break;
            case "3":
                showThirdParagraph(true);
                break;
            case "4":
                showFourthParagraph(true);
                break;
            case "5":
                showFifthParagraph(true);
                break;
            case "6":
                showSixthParagraph(true);
                break;
            
        }
    };
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {x: 0});
        showFirstParagraph(false);
        showSecondParagraph(false);
        showThirdParagraph(false);
        showFourthParagraph(false);
        showFifthParagraph(false);
        showSixthParagraph(false);
    };
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img className = 'header-pic' style = {specializedHeight}src = {headerPic} />
                <h1 className = 'process-header'>Process</h1>
                <div className = 'column'>
                    <img id = "1" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {strips} />
                    {firstParagraph && (
                    <div className = 'process-paragraph left-align'>
                        <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Plastification</h2>
                        <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "800">
                            The root of Plastifashion itself: Plastic. Wanting to change this harmful and stubborn material into something useful, we collected plastic cups over the course of a couple of weeks. After collecting used bottles, we hand washed them to ensure our fabric would be clean and maintain a transparent appearance. We then hand cut the bottles in a spiral way to get one consistent strip that can easily latch onto our rod that we use for melting the material.
                        </p>
                    </div>)}
                    <img id = "2" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {drill} />
                    {secondParagraph && (
                        <div className = 'process-paragraph right-align' style = {changeAlign}>
                            <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Spinification</h2>
                            <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "800" >
                                Using a Black Decker heat gun, we melt the strip onto a thick, hand held wire by spinning the wire around and applying heat on all sides. Using a drill with a U shaped wire insert, we dip one edge of the U wire into the fluid plastic and start to spin it quickly. This is a timely process, but it produces a beautiful and gleaming thread unlike any other. 
                            </p>
                        </div>)}
                    <img id = "3" onMouseEnter = {onEnter} onMouseLeave={onLeave} className = 'pic-adjustments' src = {carding}/>
                    {thirdParagraph && (
                        <div className = 'process-paragraph left-align' style = {furtherDown}>
                            <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Cardification</h2>
                            <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200">
                                Once gathering enough material, we started to card it to make the material. Using two brushes, we essentially brushed out our thread to transform our it into a light and airy material that can be spun.
                            </p>
                        </div>
                    )}
                    <img id = "4" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className='pic-adjustments' src = {cloud} />
                    {fourthParagraph && (
                        <div className = 'process-paragraph right-align' style = {changeAlignFourth}>
                            <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Cloudification</h2>
                            <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "800" >
                                After carding, we're greeted with a soft and fluffy material. With a cloud-like structure and texture, it's a stark contrast with the tough and rigid plastic strips we cut at the start.
                            </p>
                    </div>)}
                    <img id ="5" onMouseEnter = {onEnter} onMouseLeave = {onLeave} className = 'pic-adjustments' src = {spindle} />
                    {fifthParagraph && (
                        <div className = 'process-paragraph left-align' style = {furtherDownFifth}>
                            <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Spinification</h2>
                            <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200">
                                Using a drop spindle, we attach the soft material from the previous step to the hook atop the spindle and frequently twist the spindle to get the material to form a long strand wrapped around the rod.
                            </p>
                        </div>
                    )}
                    <img id = "6" onMouseEnter = {onEnter} onMouseLeave={onLeave} className='pic-adjustments' src = {patterning} />
                    {sixthParagraph && (
                        <div className = 'process-paragraph right-align' style = {changeAlignSixth}>
                            <h2 data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "200" className='process-explanation-header'>Patternification</h2>
                            <p data-aos = "fade-in" data-aos-duration = "2000" data-aos-delay = "800" >
                                With our material ready to be woven, we could now plan out what shape our garment would take. Using our dress form and Muslin, we wanted create a garment that would embody the chic and clean look often seen in high-fashion. Using old sketches as a basis and with the rise of V-necks making a comeback on the runways, we wanted to incorporate that into our garmet to give a sleeker, more cosmopolitan edge that fits right into the world of high-fashion.
                            </p>
                        </div>)}
                    <img id = "7" onMouseEnter = {onEnter} onMouseLeave={onLeave} className = 'pic-adjustments' style = {specializedHeight} src = {loom} />   
                    <img id = "8" onMouseEnter = {onEnter} onMouseLeave={onLeave} className='pic-adjustments' src = {woven} />
                </div>
            </div>
        </div>
    );
}
export default Process;