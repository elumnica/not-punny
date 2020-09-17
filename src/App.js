import React, { useState, useEffect } from 'react';
import { Container, Row, } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Button from './components/Button.js';
import GetPuns from './components/GetPuns.js';
import Lottie from 'react-lottie';
import * as animationData from './happy-woman.json';
import './App.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData
}

function App() {
  return (
    <div className='parent'>
        <h2 className='title'>Hey, that's not Punny!</h2>
        <GetPuns />
        <Lottie options={defaultOptions} width={50} height={50}/>
    </div>
  );
}

export default App;


