import navbar from './components/navbar.jsx'
import card from './components/card.jsx'

const App = () => {
  return (
    <div>
      {navbar()}
      {card()}
      {card()}
      {card()}
      {card()}
    </div>
  )
}

export default App
