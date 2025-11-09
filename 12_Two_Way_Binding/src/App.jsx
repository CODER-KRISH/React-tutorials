import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')

  const submitted = (e)=>{
    e.preventDefault()
    console.log("Form is submitted by", title)

    setTitle("")
  }

  return (
    <div>
      <form onSubmit={(e)=>{submitted(e)}}>
        <input type="text" placeholder="Enter your Name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App