import React, { useEffect, useState } from "react";
import "./styles.scss";
import GraphContainer from "./components/GraphContainer";
import Header from "./components/Header/Header";
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
      <Header />
      <main><GraphContainer data={data} /></main>

    </div>
  );
}
