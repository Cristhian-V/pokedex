import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './components/Inicio'
import Layout from './components/Layout'
import Pokedex from './components/Pokedex'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Inicio />}/>
            <Route path='/pokedex' element={<Pokedex />}/>
            <Route />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
