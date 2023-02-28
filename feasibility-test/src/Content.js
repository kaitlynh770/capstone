import './Website.scss';
import React, { useState, useCallback } from "react";
import Home from "./Home.js";
import Story from './Story.js';
import Navigation from './Navigation.js';
import Process from './Process.js';
import Reasons from './Reasons.js';
const Content = () => {
    const [homeState, setHomeState] = useState(true);
    const [processState, setProcessState] = useState(false);
    const[storyState, setStoryState] = useState(false);
    const [reasonsState, setReasonsState] = useState(false);
    return(
        <div>
            <Navigation setHomeState = {setHomeState} homeState = {homeState} setProcessState = {setProcessState} processState = {processState} setStoryState = {setStoryState} storyState = {storyState} setReasonsState ={setReasonsState} reasonsState = {reasonsState}/>
            {homeState && <Home/>}
            {storyState && <Story />}
            {reasonsState && <Reasons/>}
            {processState && <Process />}
        </div>
    );
}
export default Content;