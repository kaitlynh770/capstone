import './Website.scss';
import React, { useState, useCallback, useRef } from "react";
import headerPic from './img/tulips.png';
import loom from './img/loom.jpg';
import 'aos/dist/aos.css';
import AnimateSideBySide from './AnimateSideBySide';
import plastic from './img/plastic.jpg';
import plasticStrips from './img/pstrips.jpg';
import thread from './img/plastic-thread.jpg';
import threadOff from './img/threadOff.jpeg';
import threadVideo from './img/threadMaking.gif';
import cardOff from './img/carding-static.jpeg';
import cardVideo from './img/carding-video.gif';
import spindleOff from './img/spindleOff.jpg';
import spindleOn from './img/spinning-video.gif';
import pattern from './img/pattern-cutout.jpg';
import loomOn from './img/loom-fast.gif';
import drill from './img/drill.jpg'
import lump from './img/lump.jpg'
import brushes from './img/brushes.jpg'
import wrapping from './img/wrapping.gif';
import ball from './img/ball.jpg';
import AnimateSideBySideGif from './AnimateSideBySideGif';
import AnimateSideBySideCarousel from './AnimateSideBySideCarousel';


function Process(){
    let specializedHeight = {
        height: "10%"
    }
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img data-aos = "fade-in" data-aos-duration = "1000"  className = 'header-pic' style = {specializedHeight}src = {headerPic} />
                <h1 data-aos = "fade-in" data-aos-duration = "1000" data-aos-delay = "1000" className = 'process-header'>Process</h1>
                <div data-aos = "fade-up" data-aos-duration = "1000" data-aos-delay = "2000" className = 'column'>
                    <AnimateSideBySideCarousel imgSrc1={plastic} imgSrc2={plasticStrips} id = {1} step = "Plastification">
                        The root of Plastifashion itself: Plastic. Wanting to change this harmful and stubborn material into something useful, we collected plastic cups over the course of a couple of weeks. After collecting used bottles, we hand washed them to ensure our fabric would be clean and maintain a transparent appearance. We then hand cut the bottles in a spiral way to get one consistent strip that can easily latch onto our rod that we use for melting the material.    
                    </AnimateSideBySideCarousel>
                    <AnimateSideBySideGif imgSrc={threadOff} gifSrc={threadVideo} imgSrc2={drill} id = {2} step = "Spinification">
                        Using a Black Decker heat gun, we melt the strip onto a thick, hand held wire by spinning the wire around and applying heat on all sides. Using a drill with a U shaped wire insert, we dip one edge of the U wire into the fluid plastic and start to spin it quickly. This is a timely process, but it produces a beautiful and gleaming thread unlike any other.  
                    </AnimateSideBySideGif>
                    <AnimateSideBySideCarousel imgSrc1={thread} imgSrc2={lump} id = {3} step = "Threadification">

                    </AnimateSideBySideCarousel>
                    <AnimateSideBySideGif imgSrc={cardOff} gifSrc={cardVideo} imgSrc2={brushes} id = {4} step = "Cardification">
                        Once gathering enough material, we started to card it to make the material. Using two brushes, we essentially brushed out our thread to transform our it into a light and airy material that can be spun.
                    </AnimateSideBySideGif>
                    <AnimateSideBySideGif imgSrc = {spindleOff} gifSrc={spindleOn} imgSrc2 = {ball} id = {5} step = "Spinification">
                        Using a drop spindle, we attach the soft material from the previous step to the hook atop the spindle and frequently twist the spindle to get the material to form a long strand wrapped around the rod. 
                    </AnimateSideBySideGif>
                    <AnimateSideBySide imgSrc = {pattern} id = {6} step = "Patternification">
                        With our material ready to be woven, we could now plan out what shape our garment would take. Using our dress form and Muslin, we wanted to create a garment that would embody the chic and clean look often seen in high-fashion. Using old sketches as a basis and with the rise of V-necks making a comeback on the runways, we incorporated it into our garmet to give a sleeker, more cosmopolitan edge that fits right into the world of high-fashion.   
                    </AnimateSideBySide>
                    <AnimateSideBySideGif imgSrc = {loom} gifSrc = {loomOn} imgSrc2 ={wrapping} id = {7} step = "Loomification">
                        Using a Cricket Loom, we incorporated our material into the weft of the textile and used a Tabby weave as our weaving stucture. 
                    </AnimateSideBySideGif>
                </div>
            </div>
        </div>
    );
}
export default Process;