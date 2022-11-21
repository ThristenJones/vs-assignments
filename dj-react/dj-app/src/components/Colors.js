import React from 'react'
import'./Colors.css'

export default function Colors(props){
    

    return(
        <div className="squares">
            <div className="square1" style={{backgroundColor: props.color}}></div> 
        </div>
    )
}