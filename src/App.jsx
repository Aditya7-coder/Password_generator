import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("")

  let passGen = useCallback(() => {
    let ps = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      ps += str.charAt(char)
    }
    setPass(ps)



  }, [length, numAllowed, charAllowed, setPass])

  useEffect(()=>{
    passGen()
  },[length,numAllowed,charAllowed,passGen])

  

  return (
    <>
      <div className='w-full h-30 max-w-md mx-auto  shadow-md rounded-lg px-4 my-8 text-amber-500 bg-gray-500 text-center'>

        <h1 className=" text-center text-white mb-3">Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" name="" id="" value={pass} className='bg-white text-black outline-none w-full py-1 px-3' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id="" min={6} max={15} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="" className=''>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} onChange={() => { setNumAllowed((prev) => !prev) }} />
            <label className=''>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label className=''>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
