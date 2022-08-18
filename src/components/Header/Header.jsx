import React from 'react'
import './Header.scss'

export default function Header(props) {
  const { setVersion, version } = props
  return (
    <header>
      <div className="header">
        <p>00:00</p>
        <h1>Star-Wars Scrabble</h1>
        <div className="switch">
          <input
            onChange={() => setVersion(version === 'light' ? 'dark' : 'light')}
            type={'checkbox'}
          />
        </div>
      </div>
    </header>
  )
}
