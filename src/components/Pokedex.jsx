import React from 'react'
import { useSelector } from 'react-redux'

const Pokedex = () => {  
  const {trainer} = useSelector(state => state)

  console.log(trainer)
  return (
    <div>
      {trainer}
    </div>
  )
}

export default Pokedex