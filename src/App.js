import React, { useState, useEffect } from 'react';
import { Container, Row, } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Button from './components/Button.js';
import './App.css';



function App() {
  return (
    <div className='parent'>
        <h2 className='title'>Hey, that's not Punny!</h2>
        <Button />
    </div>
  );
}

export default App;


