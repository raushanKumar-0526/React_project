import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './Components/AddTodo'
import { TodoProvider } from './Context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(),...todo}])
  }

  const updateTodo = (id,todo) => {
    setTodos((list) => list.map((work) => work.id === id ? todo : work ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id === id ? {...prevtodo, complete : !prevtodo.complete} : prevtodo))
  }

  useEffect(() => {}, [todos])

  return (
    <TodoProvider value={ {todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
          </div>
      </div>
    </div>
    </TodoProvider>
  )
}

export default App
