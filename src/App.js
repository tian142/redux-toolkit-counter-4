import React, { useState } from "react"
import "./App.css"
import {
  increment,
  decrement,
  incrementBy,
  incrementAsync,
  selectCounter,
} from "./counterSlice"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [inputValue, setInputValue] = useState(0)
  const dispatch = useDispatch()
  const value = useSelector(selectCounter)

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <button onClick={() => dispatch(decrement())}>- 1</button>

      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementBy(Number(inputValue) || 0))}>
          Increment By
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(inputValue) || 0))}
        >
          Increment Async
        </button>
      </div>
    </div>
  )
}

export default App
