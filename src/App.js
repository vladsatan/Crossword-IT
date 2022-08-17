import React from 'react'
import styles from './App.module.css'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import dart from './img/dart.png'
import stars from './img/stars.png'

export default function App() {
  return (
    <div className={styles.App}>
      <img alt="" className={styles.dart} src={dart} />
      <img alt="" className={styles.stars} src={stars} />
      <Header />
      <Container />
    </div>
  )
}
