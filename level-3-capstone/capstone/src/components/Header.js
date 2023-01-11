import React from 'react';
import "./Header.css"

export default function Header(){
    return(
        <div className='header'>
            <h1 className='header--title'>Meme Generation</h1>
            <h3 className='header--subtitle'>Create Your greatest meme</h3>
        </div>
    )
}