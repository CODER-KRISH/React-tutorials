import React from 'react'

const App = () => {

  function btnChange(){
    document.getElementById('changeName').innerHTML = 'Hello, Krishna';
  }

  return (
    <div>
      <h1 id='changeName'>Hello, Krish</h1>
      <button onClick={()=>{
        // console.log(elem.screenY)
        btnChange()
      }}>Hello</button>
    </div>
  )
}

export default App