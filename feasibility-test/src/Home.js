import './Website.scss';
import ReactCurvedText from "react-curved-text";
import React, { useState, useEffect } from "react";
import dress from './img/dress.png';
import fashionIcon from './img/fashion-icon.png';
import threadIcon from './img/thread-icon.png';
import environmentIcon from './img/environment-icon.png';
import processIcon from './img/process-icon.png';
import teamworkIcon from './img/teamwork-icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import 'tippy.js/animations/scale.css';
import plastifashion from './img/plastifashion.png';
function Home(){
    const highFashionText = "A chic garment that is not only stylish and sustainable but also a feat of engineering.";
    const teamWorkText = "With a passion for the environment and fashion, we strived to use each of our unique skill sets to create a garment never before seen.";
    const materialText = "Our garment is composed entirely of recycled plastic cups. 100% man-made and environmentally friendly.";
    const processText = "Our team members have worked tirelessly to develop our garment and website in tandem with each other."
    const environmentText = " Finding another use for plastic cups, Plastifashion breathes second life into this harmful material to turn it into something that can be worn sustainably.";
    const secondTier = {
        marginTop: "2vw"
    }
    const thirdTier = {
        marginTop: "4.5vw"
    }
    const [width, setWidth] = useState("69.44444444444444vw"); //used to be 1000
    const [height, setHeight] = useState("38.263888888888886vw"); //used to be 551
    const [cx, setCx] = useState(550);//used to be 550
    const [cy, setCy] = useState(300); //moves it down
    const [rx, setRx] = useState(320);
    const [ry, setRy] = useState(140); //changes how bent it is
    const [startOffset, setStartOffset] = useState(10);
    const [reversed, setReversed] = useState(true);
    const [text, setText] = useState("Pl a s t i f a s h i o n");
    const [fontSize, setFontSize] = useState(80);
    const [kerning, setKerning] = useState()
    const font = "Recoleta Bold";
    const [textPathFill, setTextPathFill] = useState();
    const [dy, setDy] = useState(-60);
    const [fill, setFill] = useState();
    const [rotate, setRotate] = useState(5);
    const textProps = fontSize ? { style: { fontSize: fontSize, fontFamily: font } } : null;
    const textPathProps = textPathFill ? { fill: textPathFill } : null;
    const tspanProps = dy ? { dy: dy } : null;
    const ellipseProps = fill ? { style: `fill: ${fill}` } : null;
    const svgProps = rotate
      ? { style: { transform: `rotate(${rotate}deg)` } }
      : null;
    const [windowWidth, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const windowWidth = window.innerWidth
        console.log(windowWidth);
        setWindowWidth(windowWidth)
    }
    useEffect(() => {
        AOS.init();
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => 
          window.removeEventListener("resize",updateDimensions);
    }, [])
    let canShowCurvedText = windowWidth > 1024;
    return(
        <div>
            <div className = 'home'>
                <div data-aos = "fade-down" data-aos-duration = "1500">
                    {canShowCurvedText && (
                        <ReactCurvedText
                        width={width}
                        height={height}
                        cx={cx}
                        cy={cy}
                        rx={rx}
                        ry={ry}
                        startOffset={startOffset}
                        reversed={reversed}
                        text={text}
                        textProps={textProps}
                        textPathProps={{"fill": "white"}}
                        tspanProps={tspanProps}
                        ellipseProps={ellipseProps}
                        svgProps={svgProps}
                        />     
                    )}
                    {!canShowCurvedText && (
                        <div>
                            <h1 style = {{fontFamily: 'Recoleta Bold'}}>Plastifashion</h1>
                            <img style = {{marginTop: '-20vw', marginBottom: '-20vw'}}className = 'garment-size' src = {dress} />
                        </div>
                    )}     
                </div>
                {canShowCurvedText && <img data-aos = "zoom-in" data-aos-duration = "1000" data-aos-delay = "500" src = {plastifashion} className='overlap-short-term garment-size'/>}
            </div>
            <div className = 'icon-group'>
                <Tippy theme = {"light"} content = {highFashionText} animation = {"scale"} maxWidth={300}>
                    <div data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "800" className='left'>
                        <img src = {fashionIcon} className='icon-size' />
                        <p className='icon-caption'>High Fashion</p>
                    </div>
                </Tippy>
                    <div data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "1500" className = 'left-lower'  style = {secondTier}>
                        <Tippy theme = {"light"} content = {teamWorkText} animation = {"scale"} maxWidth={300}>
                            <img src = {teamworkIcon} className='icon-size' />
                        </Tippy>
                        <p className='icon-caption'>Collaboration</p>
                    </div>
                    <div data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "1800" className = 'center' style = {thirdTier}>
                        <Tippy theme = {"light"} content = {environmentText} animation = {"scale"} maxWdith = {300}>
                            <img src = {environmentIcon} className='icon-size'/>
                        </Tippy>
                        <p className='icon-caption'>Environment</p>
                    </div>
                    <div data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "2300" className = 'right-lower' style = {secondTier}>
                        <Tippy theme = {"light"} content = {processText} animation = {"scale"} maxWdith = {300}>
                            <img src = {processIcon} className='icon-size' />
                        </Tippy>
                        <p className='icon-caption'>Process</p>
                    </div>
                <Tippy theme = {"light"} content = {materialText} animation = {"scale"} maxWidth={300}>
                    <div data-aos = "fade-down" data-aos-duration = "1500" data-aos-delay = "2800" className='right'>
                        <img src = {threadIcon} className='icon-size' />
                        <p className='icon-caption'>Material</p>
                    </div>
                </Tippy>
            </div>
        </div>
    );
}
export default Home;