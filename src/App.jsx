import Player from './components/Player.jsx';
import TimerChange from './components/TimerChange.jsx';
function App() {
  
  return (
    <>
      <Player/>
      <div id="challenges">
      <TimerChange title="Easy" targetTime={1}/>
      <TimerChange title="Normal" targetTime={3}/>
      <TimerChange title="Intermediate" targetTime={5}/>
      <TimerChange title="Pro" targetTime={10}/>
      </div>
    </>
  );
}

export default App;
