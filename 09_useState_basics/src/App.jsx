import React, { useState } from 'react'

const App = () => {

  const [Value, setValue] = useState(0)

  function increase(){
    setValue(Value+1)
  }

  function jump5(){
    setValue(Value+5)
  }

  function jump15(){
    setValue(Value+15)
  }

  function decrease(){
    setValue(Value-1)
  }

  function Reset(){
    setValue(0)
  }

  return (
    <div>
      <h1>{Value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump5}>Jump 5</button>
      <button onClick={jump15}>Jump 15</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App