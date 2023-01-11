import React from 'react';
import "./components/App.css"
import Header from './components/Header'
import Main from "./components/Main"
import Footer from './components/Footer'

export default function App(){
    

    const [memeImage, setMemeImage] = React.useState("")
    
    const [formData, setFormData] = React.useState({
        firstName: "", lastName: ""
    })

   function handleChange(event){
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
            }
        })
   }
   console.log(formData)

    function getNewMeme(){
        const randomNumber = Math.floor(Math.random() * 9)
        fetch("https://api.imgflip.com/get_memes" )
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes[randomNumber].url))
    }
    
       React.useEffect(() => {
        getNewMeme()
       }, [])


    return(
        <div>
             <input 
                    type="text"
                    placeholder="Top text"
                    name="firstName"
                    onChange={handleChange}
                    className="form--input"
                    value={formData.firstName}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    name="lastName"
                    onChange={handleChange}
                    className="form--input"
                    value={formData.lastName}
                />
                <button onClick={() => {getNewMeme()}}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                <img src={memeImage} className="memeImage"/>
                <p>{formData.firstName}</p>
                
        </div>
    )
    }   