import React from 'react';
import './Container.css';

export default function Container(props) {
    const {theme, setTheme} = props
    return (
        <div className='container'>
            <div className='container-header'>
            <div className="switch">
                <input type={'checkbox'} onClick={()=>setTheme(!theme)} />
            </div>
            <p>Programming Crossword</p>
                <div className='imit-menu'>
                    <div className='green'></div>
                    <div className='yelloy'></div>
                    <div className='red'></div>
                </div>
            </div>
        </div>
    );
  }