import { useState, Dispatch, SetStateAction } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [value, setValue]: [ count: number, setCount: Dispatch<SetStateAction<number>> ] = useState(0)

  return (
    <>
      <Board />
    </>
  )
}

export default App
