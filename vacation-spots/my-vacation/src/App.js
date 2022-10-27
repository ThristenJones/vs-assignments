import React from 'react'
import vacations from './components/Vacations'
import Spots from './components/Spots'

console.log(vacations)
    function App() {
        const elements = vacations.map(vacate => {
            return <Spots 

                place={vacate.place}
                price ={vacate.price}
                timeToGo ={vacate.timeToGo}
            />
        })
        return (
            <div>
                {elements}
            </div>
        )
    }

export default App