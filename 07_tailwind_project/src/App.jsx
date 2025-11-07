import Card from "./components/Card"


const App = () => {

  const cards = [
    {
      Name: 'Base',
      price: 2000,
      quality: '7/10',
      bgcolor: 'transparent'
    },
    {
      Name: 'Standard',
      price: 2300,
      quality: '8/10',
      bgcolor: 'transparent'
    },
    {
      Name: 'Pro',
      price: 2600,
      quality: '9/10',
      bgcolor: 'lightblue'
    },
    {
      Name: 'Premium',
      price: 2900,
      quality: '10/10',
      bgcolor: 'transparent'
    }
  ]

  return (
    <div className='bg-blue-300 h-auto w-auto flex item-center justify-center p-5 gap-2'>
      <Card cards={cards}/>
    </div>
  )
}

export default App