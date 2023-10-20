import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TextItem from "./components/TextComponent";
import { Button } from "@mui/material";

function App() {
  const [names, setNames] = useState([]);
  const [ages, setAges] = useState([]);

  function addItem() {
    setNames((prev) => [...prev, Math.random().toString(36).substring(2, 7)]);
    setAges((prev) => [...prev, Math.floor(Math.random() * 100)]);
  }

  function updateDetails( index) {
    //Remove current name and replace with blank

    let removeName = names.filter((el, ind) => {
      if (ind !== index) {
        return el;
      }
    });
    var removeAge = ages.filter((el, ind) => {
      if (ind !== index) {
        return el;
      }

      setNames([...removeName]);
    });
  }

  //Whenever name is updated, print it
  console.log(names);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the EazyDraft test application.</p>
        <Button onClick={addItem}>Click to add a field</Button>
        <div>
          {names.map((name, index) => {
            return (
              <TextItem
                key={index}
                name={name}
                age={ages[index]}
                index={index}
                updateDetails={updateDetails}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
