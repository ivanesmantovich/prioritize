import { useState } from 'react'
import AppContainer from './components/AppContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Prioritize</h1>
      <AppContainer/>
    </div>
  )
}

export default App