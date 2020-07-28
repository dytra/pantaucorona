import React, { useEffect, useState } from "react";
import "./styles.scss";
import GraphContainer from "./components/GraphContainer";
import Header from "./components/Header/Header";
import Updates from "./components/Updates";
import "./utils.scss";
export default function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("indonesia");
  const BACKEND_URL = "https://covid19.mathdro.id";
  useEffect(() => {
    async function start() {
      let url;
      if (country === "all") {
        url = `${BACKEND_URL}/api/`;
      } else {
        url = `${BACKEND_URL}/api/countries/${country}`;
      }
      const fire = await fetch(url);
      const data = await fire.json();
      console.log("data is", data);
      setData(data);
    }
    start();
  }, [country]);

  const handleChangeCountry = e => {
    const val = e.target.value;
    if (!val) {
      alert("Pilih sebuah negara");
      return;
    }
    setCountry(val);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <GraphContainer data={data} country={country} setCountry={setCountry} handleChangeCountry={handleChangeCountry} />
        <hr></hr>
        <Updates />
      </main>

    </div>
  );
}
