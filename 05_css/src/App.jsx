import React from 'react'
import Header from './components/Header/Header.jsx'
import Button from './components/Button/Button.jsx'
import myPhoto from "./assets/image.png";

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Button />
      <h1>In this CSS we use module css. Which means we separetly use css for each components. This is the image</h1>
      <img src={myPhoto} alt="" />
    </div>
  )
}

export default App