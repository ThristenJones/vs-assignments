import React from 'react';
import './Nav.css'

    function Nav() {
        return (
            
            <div className='nav'>
                <h2 className='title'>Start Bootstrap</h2>
                <ul className="nav--title">
                    <li className='li'><a class="active" href="#home">Home</a></li>
                    <li className='li'><a href="#news">News</a></li>
                    <li className='li'><a href="#contact">Contact</a></li>
                    <li className='li'><a href="#about" className="">About</a></li> 
                
                </ul>

            </div>
            
        )
    }
    export default Nav;