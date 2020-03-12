import React, { useEffect, useState } from "react";
import "./styles.css";
import GraphContainer from "./components/GraphContainer";
export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function start() {
      const fire = await fetch("https://covid19.mathdro.id/api/");
      const data = await fire.json();
      console.log("data is", data);
      setData(data);
    }
    start();
  }, []);
  return (
    <div className="App">
      <h1>pantaucorona</h1>
      <GraphContainer data={data} />
    </div>
  );
}
