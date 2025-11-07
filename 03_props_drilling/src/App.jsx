import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card
       name="Krish Prajapati"
       para="Hi  I am 20 year old"
       image="https://images.unsplash.com/photo-1677039460059-56670d026f68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435"
      />

      <Card
       name="Honey Prajapati"
       para="Hi I am 30  year old"
       image="https://images.unsplash.com/photo-1760563368699-36a17aeb8811?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5M3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
      />
      
      <Card
       name="Manisha Prajapati"
       para="Hi I am 40  year old"
       image="https://plus.unsplash.com/premium_photo-1757914024115-97d823e11736?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=943"
       />
    </div>
  )
}

export default App