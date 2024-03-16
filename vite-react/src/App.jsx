import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)

  const addValue = () => {
    if(count < 20) {
        count = count + 1
        setCount(count);
    }
  }

  const removeValue = () => {
    if(count > 0) {
        count = count - 1
        setCount(count);
    }
  }


  return (
    <>
        <button onClick = {addValue}>
            Add Value
        </button>
        <br />
        <button onClick={removeValue}>
            Remove Value
        </button>
        <br />
        Count Value : {count}
    </>
  )
}

export default App
