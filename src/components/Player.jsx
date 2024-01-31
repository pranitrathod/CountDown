import { useState, useRef } from "react";

export default function Player() {
  const currentPlayerName = useRef();
  const [name, updateName] = useState("unknown entity");
  function save() {
    console.log(name??"false");
    updateName(currentPlayerName.current.value);
    currentPlayerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {name!==""?name:"unknown entity"}</h2>
      <p>
        <input ref={currentPlayerName} type="text"/>
        <button onClick={save}>Set Name</button>
      </p>
    </section>
  );
}
