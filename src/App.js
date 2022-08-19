import React from 'react'
import './App.scss'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import dart from './img/dart.png'
import stars from './img/stars.png'
import { useState } from 'react'

export default function App() {
  const [version, setVersion] = useState('light')
  const [isStart, setIsStart] = useState(false)

  return (
    <div className={version === 'light' ? 'light' : 'dark'}>
      <img alt="" className="dart" src={dart} />
      <img alt="" className="stars" src={stars} />
      <Header isStart={isStart} version={version} setVersion={setVersion} />
      <Container isStart={isStart} setIsStart={setIsStart} />
    </div>
  )
}
