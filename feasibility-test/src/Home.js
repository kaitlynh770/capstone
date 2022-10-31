import { useState, useCallback } from "react";
import Navigation from './Navigation.js';
function Home(){
    return(
        <div>
            <Navigation />
            <h1>
                This is an example app!
            </h1>
        </div>
    );
}
export default Home;