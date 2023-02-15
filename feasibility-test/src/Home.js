import './Website.scss';
import ReactCurvedText from "react-curved-text";
import React, { useState, useCallback } from "react";
import Navigation from './Navigation.js';
function Home(){
    const [width, setWidth] = useState(1000);
    const [height, setHeight] = useState(551);
    const [cx, setCx] = useState(566);
    const [cy, setCy] = useState(300); //moves it down
    const [rx, setRx] = useState(377);
    const [ry, setRy] = useState(90); //changes how bent it is
    const [startOffset, setStartOffset] = useState(10);
    const [reversed, setReversed] = useState(true);
    const [text, setText] = useState("P l a s t i f a s h i o n");
    const [fontSize, setFontSize] = useState(80);
    const [kerning, setKerning] = useState()
    const font = "Recoleta Bold";
    const [textPathFill, setTextPathFill] = useState();
    const [dy, setDy] = useState(-60);
    const [fill, setFill] = useState();
    const [rotate, setRotate] = useState(5);
    let moveUp = {
        marginTop: '-20px',
    };
  
    const textProps = fontSize ? { style: { fontSize: fontSize, fontFamily: font } } : null;
    const textPathProps = textPathFill ? { fill: textPathFill } : null;
    const tspanProps = dy ? { dy: dy } : null;
    const ellipseProps = fill ? { style: `fill: ${fill}` } : null;
    const svgProps = rotate
      ? { style: { transform: `rotate(${rotate}deg)` } }
      : null;
    return(
        <div>
            <Navigation />
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
        </div>
    );
}
export default Home;