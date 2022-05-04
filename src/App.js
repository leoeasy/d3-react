import "./App.css";
import { useEffect, useRef } from "react";
import { select } from "d3";
const data = [10, 20, 50, 70];
function App() {
  const svgRef = useRef();

  useEffect(() => {
    console.log("svg ref", svgRef);
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      );
  }, []);
  return <svg ref={svgRef}></svg>;
}

export default App;
