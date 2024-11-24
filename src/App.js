import React from "react";
import Button from "./components/Button";

const App = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };


  return (
    <div style={styles.container}>
      <h1>React Props Example</h1>
      <Button text="Click Me" onClick={handleButtonClick} />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;

