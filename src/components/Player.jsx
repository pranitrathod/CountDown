import { useState } from "react";

export default function Player({unKnown,setName}) {
  const [name,updateName]=useState("unKnown");
  function setNameValue(event)
  {
    updateName(()=>event.target.value);
  }
  function save()
  {
    setName(name);
  }

  return (
    <section id="player">
      <h2>Welcome {unKnown!=="unKnown"? unKnown: "unknown entity"}</h2>
      <p>
        <input type="text" onChange={setNameValue}/>
        <button onClick={save}>Set Name</button>
      </p>
    </section>
  );
}
