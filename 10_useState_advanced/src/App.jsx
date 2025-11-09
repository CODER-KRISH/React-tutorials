import React, { useState } from 'react'

const App = () => {

  const [value, setvalue] = useState({user: 'Krish',age: 20})

  const btnClicked = ()=>{
    const newNum = {...value} // It is called Distructuring
    newNum.user = 'Honey'
    newNum.age = 24
    setvalue(newNum)
  }

  return (
    <div>
      <h1>{value.user}, {value.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App