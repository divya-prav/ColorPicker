// Write your Color component here

import { useState } from "react";

const Color = ({ color, setColor }) => {
  return <div className={color} onClick={() => setColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color={selectedColor === "red" ? "red selected": "red"} setColor={setSelectedColor} />
        <Color color={selectedColor === "blue" ? "blue selected": "blue"} setColor={setSelectedColor} />
        <Color color={selectedColor === "green" ? "green selected":"green"} setColor={setSelectedColor} />
        <Color color={selectedColor === "violet" ? "violet selected" : "violet"} setColor={setSelectedColor}/>
        <Color color={selectedColor === "orange" ? "orange selected" : "orange"} setColor={setSelectedColor}/>
        <Color color={selectedColor === "black" ? "black selected" : "black"} setColor={setSelectedColor}/>
        <Color color={selectedColor === "yellow" ? "yellow selected" : "yellow"} setColor={setSelectedColor}/>
        
      </div>
    </div>
  );
};

export default App;
