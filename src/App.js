import React from 'react';
import {useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';

export default function App() {

  const [theme, setTheme]= useState(false)

  useEffect(()=>{
    if(theme === true){
      
    }else{
     console.log(false); 
    }
  })

    
  
    


  return (
    <div className="App">
    <Container theme={theme} setTheme={setTheme} />
    </div>
  );
}


