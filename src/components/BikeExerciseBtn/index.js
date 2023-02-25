import React from 'react'
import Stopwatch from '../DurationExercise'


const Bicycling  = ({title}) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <Stopwatch/>
       
    </div>
  )
}

export default Bicycling