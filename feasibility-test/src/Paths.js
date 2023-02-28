import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import About from "./Story";

const Paths = () =>
    <Routes>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Routes>
export default Paths;