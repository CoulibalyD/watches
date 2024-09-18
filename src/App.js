import { useState } from "react";
import Navbar from "./compennts/Navbar/Navbari.jsx";

function App() { 
  const [mode, setMode] = useState("light");

  return (
    <div className={mode === "light" ? "container" : "dark container"}>
      <Navbar mode={mode} setMode={setMode} />  {/* Pass both mode and setMode */}
    </div>
  );
}

export default App;