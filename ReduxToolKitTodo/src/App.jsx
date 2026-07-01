import { useState } from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'


function App() {

  return (
   <>
   <h1 className='text-3xl text-center bg-gray-400 p-4 rounded-md'>Managing Todos using Redux Tool kit</h1>
   <AddTodo />
   <Todos />
   </>
  )
}

export default App
