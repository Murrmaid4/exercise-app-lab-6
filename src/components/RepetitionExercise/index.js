import React, {useState} from 'react'
import './counter.css'
function Reps() {
  const [rep, setReps] = useState(0);

  const reset = () => {
    setReps(0);
  }
  
  function decreaseRep(){
    setReps(prevRep => prevRep - 1)
  }
  function increaseRep(){
    setReps(nextRep => nextRep + 1)
  }

  
    return (
    <div className='reps'>
     
        <div className='counter'>{rep}</div>
         <div className='count-btns'>
        <button onClick={decreaseRep} className='counter-btn'>-</button>
         <button onClick={reset}>Reset Counter</button>
        <button onClick={increaseRep} className='counter-btn'>+</button>
      </div>

    </div>
  )
}

export default Reps