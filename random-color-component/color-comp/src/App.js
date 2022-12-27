import axios from 'axios';
import React from 'react';
import "./App"
import './App.css'


    export default function App(){

        const [color, setColor] = React.useState('')


        React.useEffect(() => {
            axios.get("https://www.colr.org/json/color/random")
            .then(res => setColor(res.data.colors[0].hex))
            .catch(err => console.log(err))
        }, [])

        return(
           <div className='divColor' style={{backgroundColor: `#${color}`}}></div>
        )
    }