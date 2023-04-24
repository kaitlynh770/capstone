import React, { useCallback, useRef, useState} from 'react';
import { gsap } from "gsap";
import './Website.scss';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function AnimateSideBySideCarousel({
    children,
    imgSrc1,
    imgSrc2,
    id,
    step,
}){
    const [showText, setTextState] = useState(false);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const onEnter = useCallback(({currentTarget}) => {
        let value = currentTarget.id;
        if(value%2 !==0){
            gsap.to(imageRef.current, {x:"20.833333333333332vw", delay: 0.3, duration: 0.5});
            gsap.to(textRef.current, {x: "-20.833333333333332vw", delay: 0.3, duration: 0.5});
        }
        else{
            gsap.to(imageRef.current, {x: "-20.833333333333332vw", delay: 0.3, duration: 0.5});
            gsap.to(textRef.current, {x: "20.833333333333332vw", delay: 0.3, duration: 0.5})
        }
        setTextState(true);
    }, [textRef], [imageRef])

    const onLeave = useCallback(() => {
        setTextState(false);
        gsap.to(imageRef.current, {x: 0, delay: 0.3, duration: 0.5});
        gsap.to(textRef.current, {x:0, delay: 0.3, duration: 0.5 });
    }, [textRef], [imageRef]);
    return(
        <div className = 'process-img-and-text' id = {id} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div style = {{display: 'flex', justifyContent: 'center'}}ref = {imageRef}>
            <Carousel ref = {imageRef} className='pic-adjustments' infiniteLoop= {true} showArrows= {true} showStatus={false} showThumbs={false}>
                <div>
                    <img src = {imgSrc1} className='pic-adjustments'/>
                </div>
                <div style = {{display:'flex', justifyContent: 'center'}}>
                    <img src = {imgSrc2} className='pic-adjustments'/>
                </div>
                </Carousel>
            </div>
            <div className={`process-paragraph${id%2!==0 ? ' left-align': ' right-align'}`}>
                <div ref = {textRef}>
                    {showText && (
                    <div data-aos = "fade-in" data-aos-delay="700" data-aos-duration="2000">
                        <h2 className='process-explanation-header'>{step}</h2>
                        <p>
                            {children}
                        </p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
//{id==2 ? 'pic-adjustments-special': 'pic-adjustments'}