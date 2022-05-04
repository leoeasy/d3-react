import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
function App() {
  const svgRef = useRef();
  const [data, setData] = useState([10, 20, 50, 70]);
  useEffect(() => {
    console.log("svg ref", svgRef);
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("calss", "new")
            .attr("r", (value) => value)
            .attr("cx", (value) => value + 2)
            .attr("cy", (value) => value + 2)
            .attr("stroke", "red"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      );
  }, [data]);
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((v) => v + 5))}>
        Updateed data
      </button>
      <span />
      <button onClick={() => setData(data.filter((v) => v > 50))}>
        Filter data
      </button>
    </React.Fragment>
  );
}

export default App;
