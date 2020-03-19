import React, { useEffect, useState } from "react";
import "./styles.scss";
import GraphContainer from "./components/GraphContainer";
import Header from "./components/Header/Header";
import Updates from "./components/Updates";
import "./utils.scss";
export default function App() {
  const [data, setData] = useState({});
  const BACKEND_URL="https://covid19.mathdro.id";
  useEffect(() => {
    async function start() {
      const fire = await fetch(`${BACKEND_URL}/api/`);
      const data = await fire.json();
      console.log("data is", data);
      setData(data);
    }
    start();
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <GraphContainer data={data} />
        <hr></hr>
        <Updates/>
      </main>

    </div>
  );
}
