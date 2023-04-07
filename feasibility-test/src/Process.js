import './Website.scss';
import React, { useState, useCallback, useRef } from "react";
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
import AnimateSideBySide from './AnimateSideBySide';

function Process(){
    let specializedHeight = {
        height: "8%"
    }
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img data-aos = "fade-down" data-aos-duration = "1000"  className = 'header-pic' style = {specializedHeight}src = {headerPic} />
                <h1 data-aos = "fade-in" data-aos-duration = "1000" data-aos-delay = "1000" className = 'process-header'>Process</h1>
                <div data-aos = "fade-up" data-aos-duration = "1000" data-aos-delay = "2000" className = 'column'>
                    <AnimateSideBySide imgSrc={strips} id = {1} step = "Plastification">
                        The root of Plastifashion itself: Plastic. Wanting to change this harmful and stubborn material into something useful, we collected plastic cups over the course of a couple of weeks. After collecting used bottles, we hand washed them to ensure our fabric would be clean and maintain a transparent appearance. We then hand cut the bottles in a spiral way to get one consistent strip that can easily latch onto our rod that we use for melting the material.
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc = {drill} id = {2} step = "Spinification">
                        Using a Black Decker heat gun, we melt the strip onto a thick, hand held wire by spinning the wire around and applying heat on all sides. Using a drill with a U shaped wire insert, we dip one edge of the U wire into the fluid plastic and start to spin it quickly. This is a timely process, but it produces a beautiful and gleaming thread unlike any other.  
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc ={carding} id ={3} step = "Cardification">
                        Once gathering enough material, we started to card it to make the material. Using two brushes, we essentially brushed out our thread to transform our it into a light and airy material that can be spun.    
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc = {cloud} id = {4} step = "Cloudification">
                        After carding, we're greeted with a soft and fluffy material. With a cloud-like structure and texture, it's a stark contrast to the tough and rigid plastic strips we cut at the start.
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc = {spindle} id = {5} step = "Spinification">
                        Using a drop spindle, we attach the soft material from the previous step to the hook atop the spindle and frequently twist the spindle to get the material to form a long strand wrapped around the rod. 
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc = {patterning} id = {6} step = "Patternification">
                        With our material ready to be woven, we could now plan out what shape our garment would take. Using our dress form and Muslin, we wanted to create a garment that would embody the chic and clean look often seen in high-fashion. Using old sketches as a basis and with the rise of V-necks making a comeback on the runways, we incorporated it into our garmet to give a sleeker, more cosmopolitan edge that fits right into the world of high-fashion.   
                    </AnimateSideBySide>
                    <AnimateSideBySide imgSrc = {loom} id = {7} step = "Loomification">
                        Using a drop spindle, we attach the soft material from the previous step to the hook atop the spindle and frequently twist the spindle to get the material to form a long strand wrapped around the rod.
                    </AnimateSideBySide> 
                    <AnimateSideBySide imgSrc={woven} id = {8} step = "Patternification">
                    With our material ready to be woven, we could now plan out what shape our garment would take. Using our dress form and Muslin, we wanted to create a garment that would embody the chic and clean look often seen in high-fashion. Using old sketches as a basis and with the rise of V-necks making a comeback on the runways, we incorporated it into our garmet to give a sleeker, more cosmopolitan edge that fits right into the world of high-fashion.
                    </AnimateSideBySide>
                </div>
            </div>
        </div>
    );
}
export default Process;