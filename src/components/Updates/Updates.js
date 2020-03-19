import React, { useEffect, useState } from "react";
import UpdatesList from "./UpdatesList";
import "../../styles.scss";
import "./Updates.scss";
const Updates = () => {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    async function start() {
      const BACKEND_URL = "https://covid19.mathdro.id";
      const fire = await fetch(`${BACKEND_URL}/api/daily`);
      const updates = await fire.json();
      const updatesReversed = updates.reverse();
      const updatesFiltered = updatesReversed.filter((update, index) => index < 10);
      setUpdates(updatesFiltered);
    }
    start();

  }, []);
  return (
    <div className="card card-full">
      <div className="card-title">
        <h2>Updates</h2>

      </div>
      <div className="card-body">
        <UpdatesList updates={updates} />
      </div>
    </div>
  )
}

export default Updates;