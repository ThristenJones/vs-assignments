import React from 'react';
import './App.css'

export default function App(){

    const [formData, setFormData] = React.useState({
        firstName: "", lastName: "", email: "", birthPlace: "", phoneNumber: "", favoriteFoods: "", comments: ""
    }) 

    const [badgeFormData, setBadgeFormData] = React.useState([])


    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const formArray = badgeFormData.map(data => {
        
        return( 
        <div>
        
            <p className="title"><b>BADGE: </b></p>
            <div className="badge">
                <p><b>Name:</b> {data.firstName} {data.lastName}</p> 

                <p><b>Place Of Birth:</b> {data.birthPlace}</p>
                
                <p><b>Email:</b> {data.email}</p>

                <p><b>Phone:</b> {data.phoneNumber}</p>

                <p><b>Favorite Food:</b> {data.favoriteFoods}</p>

                <textarea className="comments">{data.comments}</textarea>
            </div>
        </div>
        )
    })

    function onlyNumbers(str) {
        return /^[0-9]+$/.test(str);
      }

    function handleSubmit(event){
        event.preventDefault()
        
        if(formData.firstName === ''){
            alert('Please fill in all inputs: FIRST NAME')
            return
        }
        if(formData.lastName === ''){
            alert('Please fill in all inputs: LAST NAME')
            return
        }
        if(formData.email === ''){
            alert('Please fill in all inputs: EMAIL')
            return
        }
        if(formData.birthPlace === ''){
            alert('Please fill in all inputs: BIRTH PLACE')
            return
        }
        if(formData.phoneNumber === ''){
            alert('Please fill in all inputs: PHONE NUMBER')
            return
        }
        if(formData.favoriteFoods === ''){
            alert('Please fill in all inputs: FAVORITE FOOD')
            return
        }

        if(onlyNumbers(formData.phoneNumber) === false){
            alert('PHONE NUMBER FIELD should only contain numbers')
            return
        }

        setBadgeFormData(prevValue => [...prevValue, formData]);
        setFormData({
            firstName: "", lastName: "", email: "", birthPlace: "", phoneNumber: "", favoriteFoods: "", comments: ""
        })

    }



    return(
        <form onSubmit={handleSubmit}>
            <h1 className='badgeTitle'> Name Badge Entry</h1>
            <div className="container">
                <input
                    className="item1"
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <input
                    className="item2"
                    type="text"
                    name="lastName"
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <input
                    className="item3"
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <input
                    className="item4"
                    type="text"
                    name="birthPlace"
                    placeholder='Place Of Birth'
                    value={formData.birthPlace}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <input
                    className="item5"
                    type="text"
                    name="phoneNumber"
                    placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <input
                    className="item6"
                    type="text"
                    name="favoriteFoods"
                    placeholder='Favorite Food'
                    value={formData.favoriteFoods}
                    onChange={handleChange}
                    minLength='3'
                ></input>

                <textarea 
                    className='textarea'
                    type="text"
                    name="comments"
                    placeholder='Tell us about yourself?'
                    value={formData.comments}
                    onChange={handleChange}
                    minLength='3'
                />
                <button className='button'>Submit</button>
            </div>
            
           {formArray}
        </form>
    )
}