import React, { useState, Fragment } from "react";
import Form from "./components/Form";

function App() {
  const [quotes, saveQuotes] = useState([]);

  return (
    <Fragment>
      <h2>Patient Manager</h2>;
      <div className="container">
        <div className="row">
          <div className="one-half  column">
            <Form/>
          </div>
          <div className="one-half  column"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
