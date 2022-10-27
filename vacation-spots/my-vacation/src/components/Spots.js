import React from 'react';
import './Vacations'
import './Spots.css'

    function Spots(props) {
        return(
            <div className='card'>
                <img src={'https://www.busytourist.com/wp-content/uploads/2019/06/Bora-Bora-French-Polynesia.jpg.webp'} width="300px"></img>
                <div className='container'>
                    <h3>Place: {props.place}</h3>
                    <h3>Price: ${props.price}</h3>
                    <h3>Time: {props.timeToGo}</h3>
                </div>
            </div>
        )
    }

    export default Spots