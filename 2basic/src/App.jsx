import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componet/Card';

function App() {
  // let counter = 20;

  let [counter, setcounter] = useState(10);
const addvalue =()=>{
if(counter  < 200){
  console.log ("Add Value" , counter )
  setcounter(counter+1)
  // setcounter(precounter => precounter +1)
  // setcounter(precounter => precounter +1)
  // setcounter(precounter => precounter +1)
  // setcounter(precounter => precounter +1)

}

else {

}
}
const removevalue = ()=>{
  if(counter  > 0 ){

    counter = counter -1;
  setcounter(counter)
  }
 

}
  return (
    <>
    <h1 class="bg-green-400 py-2 px-6 rounded">counter : {counter}</h1>
    <button onClick={addvalue}>Add value {counter}</button><br></br>
    <button onClick={removevalue}> Remove value {counter}</button>
    <footer>{counter}</footer>
   <Card tital="heloo" btntext="click"></Card><br></br>
   <Card tital="HII...................."></Card>
    </>
  )
}

export default App
