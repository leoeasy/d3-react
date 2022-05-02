import "./App.css";
import { useEffect, useRef } from "react";
function App() {
  const svgRef = useRef();

  useEffect(() => {
    console.log("svg ref", svgRef);
  }, []);
  return <svg ref={svgRef}></svg>;
}

export default App;
