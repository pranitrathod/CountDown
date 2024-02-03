import { useState,useRef } from "react";

export default function TimerChange({ title, targetTime }) {
  const time=useRef();
  // const [checkRunning, setCheckRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    
  time.current= setTimeout(() => {
  
      console.log("inside setTimeout!")
      setTimerExpired(true);
    },targetTime*1000);
    setTimerStarted(true);
    
  }
  function clearTime()
  {
    clearTimeout(time.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
  
      <p className="challenge-time">
        {targetTime} {targetTime > 1 ? "seconds" : "second"}
      </p>
      <p>
        <button onClick={timerStarted ? clearTime:handleStart}>
          {timerStarted ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p>{timerStarted ? "Time is running!!!!" : "Inactive"}</p>
    </section>
  );
}