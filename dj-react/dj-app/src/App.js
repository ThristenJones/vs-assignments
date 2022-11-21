import React from 'react';
import Colors from './components/Colors'

    export default function App() {

        const [colorsArray, setColorsArray] = React.useState(["white", "white", "white2", "white2"])

        // const [topTwoColors, setTopTwo] = React.useState(colorsArray.slice(2))

        // console.log(topTwoColors)

        const allColors = colorsArray.map(color => <Colors color={color} />)

       console.log(colorsArray, "testing colors arr")
       
        
        function colorSquare1(){
            setColorsArray( prevColor => prevColor.map(color => color==="black"? "white" : "black"))
        }

        function purpleSquare(){
            setColorsArray(prevColor => prevColor.map(color => color==="white" ? "purple" : "white"))
        }


        function colorSquare3(){
            setColorsArray(prevColor => {
                prevColor.map(color => {
                    console.log(color, "testing")

                    return{
                        colorsArray: [color[0], color[1], "blue", "white"]
                    }
                })
            })
        }


        function colorSquare4(){
            setColorsArray(prevColor => prevColor.map(color => color ==="white" ? "blue": "white"))
        }


        return(
            <div>  
                    {allColors}
                    <button onClick={colorSquare1}>Black/White</button>
                    <button onClick={purpleSquare}>Purple</button>
                    <button onClick={colorSquare3}>bottom left blue</button>
                    <button onClick={colorSquare4}>bottom right blue</button>

            </div>
        )
    }





    // const topColors = colorsArray.map(color => <Colors color={color.slice(2)} />)

    // function colorSquare3(){
    //     setColorsArray(prevColor => prevColor.map(color => color[2] ==="white" ? "blue": "white"))
    // }

    
    // const [topColors, setTopColors] = React.useState(colorsArray.slice(2))