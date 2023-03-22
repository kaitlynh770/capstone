import './Website.scss';
import React, { useState, useCallback } from "react";
import classyHeader from './img/aesthetic-header.png';
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import c1 from './img/c1.png';
import c2 from './img/c2.png';
import c3 from './img/c3.png';
import bottomHeader from './img/bottom-header.png';
function Reasons(){
    let boldFont = {
        fontFamily: 'Recoleta Bold, cursive',
    };
    let paddingTop = {
        paddingTop: '5vw',
    }
    return(
        <div className = 'container'>
            <div className = 'process-page'>
                <img className = 'header-pic' src = {classyHeader} />
                <div className = 'right-half-process'>
                    <p className = 'why-us-paragraph' style = {paddingTop}>
                        Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora 
                    </p>
                </div>
                <div className= 'left-half-process'>
                    <h2 className = 'why-us-text'><span style = {boldFont}>WHY US?</span> <br></br><br></br> SP23 <br></br> COLLECTION</h2>
                </div>
                <Carousel >
                    <Carousel.Item>
                        <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                        >
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {c1} />
                            </Card>
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {c2} />
                            </Card>
                            <Card style={{ width: "18rem", background: "black" }}>
                                <img className='carousel-image' src = {c3} />
                            </Card>
                        </Stack>
                    </Carousel.Item>
                </Carousel>
                <div className = 'right-half-process'>
                    <p className = 'why-us-paragraph' style = {paddingTop}>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                    </p>
                </div>
                <div className = 'left-half-process'>
                    <p className = 'why-us-paragraph' style = {{paddingTop: '6vw'}}>
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                    </p>
                </div>
                <img className = 'header-pic' src = {bottomHeader} />
            </div>
        </div>
    );
}
export default Reasons;