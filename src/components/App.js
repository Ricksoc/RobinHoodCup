import React from "react";
import Champions from "./Champions";
import Performance from "./Performance";
import data from "./data/data.json";
import TeamHistory from "./TeamHistory";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Robin Hood Cup</h1>
        <img src="../../images/favicon.ico" alt="Trophy" />
      </div>
      <div className="summary">
        <Champions data={data} />
        <Performance data={data} />
      </div>
      <div className="teams">
        <TeamHistory data={data} />
      </div>
    </div>
  );
}
