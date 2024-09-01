import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("pink")

  return (
    <div className= "w-full h-screen duration-200"  style={{backgroundColor: color}}>
    
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
 <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
 <button className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}>red</button>
 <button className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}>Green</button>
 <button className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}>yellow</button>
 <button className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}>blue</button>
 <button className='outline-none px-4 py-1 rounded-full text-white ' style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}>Black</button>
 
 </div>
    </div>
    </div>
  )
}

export default App
