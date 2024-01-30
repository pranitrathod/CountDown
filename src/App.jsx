import { useState } from 'react';
import Player from './components/Player.jsx';

function App() {
  const [playerName,updatePlayerName]=useState("unKnown");
  function setPlayerName(value)
  {
    if(value===""){
      updatePlayerName("unKnown entity");
    }else
updatePlayerName(value);
  }
  return (
    <>
      <Player unKnown={playerName} setName={setPlayerName}/>
      <div id="challenges"></div>
    </>
  );
}

export default App;
