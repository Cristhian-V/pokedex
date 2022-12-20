import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setTrainer } from '../store/slices/user.slice'

const Inicio = () => {
  const { trainer } = useSelector(state => state)

  const dispatch = useDispatch()

  const {register,handleSubmit} = useForm()

  const submit = (data) => {
    dispatch(setTrainer(data.trainerName))
    
  }

  return (
    <div>
      <h1>Hello trainer!</h1>
      <img src="" alt="" />
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" className='form-trainer' {...register('trainerName')}/>
        <button className='form-button'> Registrar </button>
      </form>
    </div>
  )
}

export default Inicio