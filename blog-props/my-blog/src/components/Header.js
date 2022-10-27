import React from 'react';
import './Header.css'
import Nav from "./Nav"
    function Header() {
        return (
        <div className='header'>
            <Nav />
                <div className='header--section'>
                    <h1 className='title1'>Clean Blog</h1>
                    <h5 className='subtitle'>A Blog Theme By Bootstrap</h5>
                </div>
        </div>
        )
    }

    export default Header;