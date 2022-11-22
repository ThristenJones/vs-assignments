import React from 'react';
import Colors from './components/Colors'

    export default function App() {

        const [colorsArray, setColorsArray] = React.useState(["white", "white", "white", "white"])

        console.log(colorsArray[2])

        const allColors = colorsArray.map(color => <Colors color={color} />)

        function colorSquare1(){
            setColorsArray( prevColor => prevColor.map(color => color==="black"? "white" : "black"))
        }

        function purpleSquare(){
            setColorsArray(prevColor => prevColor.map(color => color==="white" ? "purple" : "white"))
        }


        function colorSquare3(){
            setColorsArray(prevColor => {
              return [prevColor[0], prevColor[1], 'blue', prevColor[3]]
            })
          }


          function colorSquare4(){
            setColorsArray(prevColor => {
              return [prevColor[0], prevColor[1], prevColor[2], "blue"]
            })
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