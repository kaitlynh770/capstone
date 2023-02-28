import './Website.scss';
import React, { useState, useCallback } from "react";
import Home from "./Home.js";
import Story from './Story.js';
import Navigation from './Navigation.js';
import Process from './Process.js';
import headerPic from './img/tulips.png';
function Content(){
    const [showHome, setHomeState] = useState(true);
    const [showAboutPage, setShowAboutPage] = useState(false);
    const[showStoryPage, setShowStoryPage] = useState(false);
    console.log(showAboutPage);
    return(
        <div>
            <Navigation/>
            {/* {showHome && <Home/>} */}
            {/* <Story /> */}
            <Process />
        </div>
    );
}
export default Content;