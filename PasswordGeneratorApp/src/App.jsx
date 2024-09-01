import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setlength] = useState(8)
const [numberAllowed,setnumberallowed] = useState(false)
const [charAllow,setcharAllow] = useState(false)
const[Password,setpassword] = useState("")
const passwordref = useRef(null);
const copypasswordclipbord = useCallback (()=>{
  passwordref.current?.select();
  passwordref.current?.setSelectionRange(0,23)
  window.navigator.clipboard.writeText(Password)
},[Password])
const  passworgenerator= useCallback(()=>{
let pass = ""
let str = "ABCDEGFGIFROFBFKHTIKTIKHMvbvbfdifidfibjfghgkljgortvjnfied"
if(numberAllowed) str += "0123456789"
if(charAllow) str += "!@#$%^&*()~`"
for(let i = 1;i <= length; i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
}
setpassword(pass)
},[length,charAllow,numberAllowed,setpassword])
 
useEffect(()=>{
  passworgenerator()
},[length,charAllow,numberAllowed,passworgenerator])

  return (
    <>
     <center>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center'>
      <h1 className='text-4xl text-center text-white text-center mb-4'> Password Generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4 " >
    <input 
    type="text"
    value={Password}
    className='outline-none w-full py-2 px-3  '
    placeholder='password'
    ref={passwordref}
    readOnly
    ></input>
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswordclipbord}>copy</button>
</div>
   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type='range' min={8}  max={100} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}></input>
  <label>Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onChange={()=> { setnumberallowed((prev) => !prev);}}></input>
      <label htmlFor='numberinput'>Numbers</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={charAllow} id="numberInput" onChange={()=> { setcharAllow((prev) => !prev);}}></input>
      <label htmlFor='numberinput'>char</label>

    </div>
   </div>
      </div>
      </center>
    </>
  )
}

export default App
