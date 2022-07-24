import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  //clear button functionality

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthday's today</h3>
        <List people={people} />
        <button
          onClick={() => {
            clearAll();
          }}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
