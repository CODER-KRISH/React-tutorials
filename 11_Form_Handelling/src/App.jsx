const App = () => {

  const submitted = (e)=>{
    e.preventDefault()
    console.log("Form is submitted")
  }

  return (
    <div>
      <form onSubmit={
        (e)=>{
          submitted(e)
        }
      }>
        <input type="text" placeholder="Enter your Name"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App