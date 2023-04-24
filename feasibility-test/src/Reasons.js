import './Website.scss';
import React, { useState, useCallback } from "react";
import classyHeader from './img/aesthetic-header.png';
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import dressAngled from './img/dress-angled.jpg';
import dressCloseup from './img/dress-closeup.jpg';
import dressSide from './img/dress-side.jpg';
import dressBack from './img/dress-back.jpg';
import bottomHeader from './img/bottom-header.png';
function Reasons(){
    let boldFont = {
        fontFamily: 'Recoleta Bold, cursive',
        color: 'white',
        fontSize: '2.5vw'
    };
    let paddingTop = {
        paddingTop: '2vw',
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img className = 'header-pic' src = {classyHeader} />
                <div className = 'right-half-process'>
                    <p className = 'why-us-paragraph'>
                        With the reputation of fast fashion and the overwhelming amount of waste produced in today's fashion industry, Plastifashion aimed to transform some of this waste into something of value. Plastic is notorious for being an for being single-use and non-biodegradable. We challenged ourselves to turn plastic into something that is quite literally, the opposite of what it stands for. Breathing a second life into this harmful material, Plastifashion is an elegant garment primarily made of collected recyled plastic cups. Every part of the plastic is used, striving in accordance with zero waste principles. Plastifashion's chic design is where style meets sustainability, pioneered by practices that respect our environment, its wildlife and its people.
                    </p>
                </div>
                <div className= 'left-half-process'>
                    <h2 className = 'why-us-text'>OUR STORY</h2>
                </div>
                <Carousel >
                    <Carousel.Item>
                        <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                        >
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {dressAngled} />
                            </Card>
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {dressSide} />
                            </Card>
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {dressBack} />
                            </Card>
                        </Stack>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <Stack
                            direction="horizontal"
                            className="h-100 justify-content-center align-items-center"
                            gap={3}
                            >
                            <Card style = {{width: "18rem", background: "black"}}>
                                <img className='carousel-image' style = {{width: "100%"}}src = {dressCloseup}/>
                            </Card>
                            </Stack>
                    </Carousel.Item> */}
                </Carousel>
                <div className = 'right-half-process'>
                    <h2 style = {boldFont}>Motivation</h2>
                    <p className = 'why-us-paragraph' style = {paddingTop}>
                        Plastifashion has always strived to do one thing: do the unpredictable. With our unique skillsets and knowledge, we strived to create something that is seldom seen in the fashion industry, a polished high fashion garment only made of recycled materials. We wanted to create something that would rock the fashion industry with new engineering techniques and shake the very core of what exactly 'high-fashion' is.
                    </p>
                </div>
                <div className = 'left-half-process'>
                    <h2 style = {boldFont}>Goal</h2>
                    <p className = 'why-us-paragraph' style = {{paddingTop: '3vw'}}>
                        Plastic pollution is one of the most pressing environmental issues that is growing at a rapid rate to the point that it overwhelms our ability to deal with it. Although Plastifashion can't expect to solve plastic pollution entirely on its own, our goal for this project was to create a different outlet for recycling plastic with our current knowledge and abilities. There's too much plastic in the world, and we need to get creative with ways to redirect them into new products. 
                    </p>
                </div>
                <img className = 'header-pic' src = {bottomHeader} />
            </div>
        </div>
    );
}
export default Reasons;