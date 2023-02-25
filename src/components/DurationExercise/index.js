import React, { useState } from 'react'
import Timer from '../Timer/index';
import ControlButtons from '../controlButtons/index';

function Stopwatch() {
  const [active, setActive] = useState(false);
  // records is start has been clicked or not 
  const [isPaused, setIsPaused] = useState(true)
  // records when the pause button has been clicked 
 const [time, setTime] = useState(0);
  //this is the state of the timer as a whole  
 
//  useEffect allows these functions to run after render
 React.useEffect(() => {
    let interval = null;
  
    if (active && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }return () => {
      clearInterval(interval);
    };
  }, [active, isPaused]);
    
     const handleStart = () => {
    setActive(true);
    setIsPaused(false);
  };
  
     const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setActive(false);
    setTime(0);
  };

    return (
    <div>
        <Timer time={time}/>  
        <ControlButtons 
        active={active}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      /> 
        
    </div>
  )
}


export default Stopwatch