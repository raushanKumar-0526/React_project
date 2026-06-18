import { useState } from 'react'
import Card from './Card.jsx'

function App() {

  return (
    <div>
      <p className='bg-green-400'>Tailwind test</p>
      <h1>Tailwind test 2</h1>
      <h1 className="text-3xl font-bold underline bg-blue-700">
        Hello world!
      </h1>
      <br /><br />
      <Card coursename="React.js"/>
      <br /><br />
      <Card coursename="Full stack development" />
      
    </div>
  )
}

export default App
