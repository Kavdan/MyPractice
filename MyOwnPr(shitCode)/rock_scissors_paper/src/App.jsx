import { useState } from 'react'
import { Game } from './features/gameSlice/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game />
    </div>
  )
}

export default App
