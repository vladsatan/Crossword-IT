import React from 'react'
import './App.scss'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import dart from './img/dart.png'
import stars from './img/stars.png'
import { useState } from 'react'

export default function App() {
  
  const [version, setVersion] = useState('light')

  return (
    <div className={version === 'light' ? 'light' : 'dark'}>
      <img alt="" className="dart" src={dart} />
      <img alt="" className="stars" src={stars} />
      <Header version={version} setVersion={setVersion} />
      <Container />
    </div>
  )
}
