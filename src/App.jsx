import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { setTrainer } from './store/slices/user.slice'


function App() {
  const { trainer } = useSelector(state => state)

  const dispatch = useDispatch()

  const trainerUpd = () => {
    dispatch(setTrainer('Cristhian'))
  }

  console.log(trainer)

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <p>{trainer}</p>
      <button onClick={trainerUpd}>user</button>
    </div>
  )
}

export default App
