import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [incNumbers, SetIncNumbers] = useState(false);
  const [incChar, SetIncChar] = useState(false);

  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let btn = document.getElementById('copy-btn')
    btn.innerText = "Copy"
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(incNumbers) str += "0123456789"
    if(incChar) str += "~!@#$%^&*()_{}[]`?"

    for(let i = 1 ; i <= length; i++){
       let pos = Math.floor(Math.random() * str.length + 1)

       pass += str.charAt(pos);
    }

    setPassword(pass)
  },[length, incNumbers, incChar, setPassword])

  useEffect(() => {
    generatePassword()
    }, [length, incNumbers, incChar, setPassword]
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    let btn = document.getElementById('copy-btn')
    btn.innerText = "Copied"
  }, [password])


  return (
    <div className="App">
      <h2 className='text-3xl font-bold text-center m-2'>Password Generator</h2>
      <div className='text-3xl font-bold text-center m-2'>
        <input 
        type="text" 
        className='border-2 border-black rounded-md p-2 m-2'
        value={password} 
        readOnly 
        ref={passwordRef}/>
        <button 
        id='copy-btn'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='font-bold text-center m-2'>
        <input 
        type="range" 
        id="length" 
        min="8" 
        max="20" 
        value={length} 
        onChange = {(e) => setLength(e.target.value)}/>
        <label htmlFor="length">Password Length : {length}</label>

        <input 
        type="checkbox" 
        id="uppercase" 
        className='border-2 border-black rounded-md p-2 m-2'
        onChange={() => {SetIncNumbers((prev) => !prev)}} />
        <label htmlFor="uppercase">Include Numbers</label>
        
        <input 
        type="checkbox" 
        id="lowercase" 
        className='border-2 border-black rounded-md p-2 m-2'
        onChange={() => {SetIncChar((prev) => !prev)}} />
        <label htmlFor="lowercase">Include character</label>
      </div>
    </div>
  )
}

export default App
