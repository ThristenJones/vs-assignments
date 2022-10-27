import React from 'react';
import './Footer.css'

    function Footer() {
        return (
            <div>
        <div className='footer'>
            <span className='link'><a className='link' href="#" class="fa fa-facebook"></a></span>
            <span className='link'><a className='link' href="#" class="fa fa-twitter"></a></span>
            <span className='link'><a className='link' href="#" class="fa fa-instagram"></a></span>

        </div>
            <div className='copyright'>
            Copyright © Your Website 2022
            </div>
        </div>
        )
    }

    export default Footer;