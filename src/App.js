import './App.css'
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    // TODO: Retrieve saved name from session storage
    const savedName = sessionStorage.getItem("savedName");
    if(savedName){
      setSavedName(savedName);
    }
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveButtonClick = () => {
    // TODO: Save name to session storage
    sessionStorage.setItem("savedName", name);
    setSavedName(name);
    setName("");
  };

  return (
    <div className="App">
    <br/>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSaveButtonClick}>Save</button>
      <br/>
      {savedName && <p>Saved name: {savedName}</p>}
    </div>
  );
}

export default App;
