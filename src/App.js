import React, { useState, Fragment } from "react";
import Form from "./components/Form";

function App() {
  const [appointments, saveAppointment] = useState([]);

  const createAppointment = (appointment) => {
    const newsAppointments = [...appointments, appointment];
    saveAppointment(newsAppointments);
  };

  return (
    <Fragment>
      <h2>Patient Manager</h2>;
      <div className="container">
        <div className="row">
          <div className="one-half  column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half  column"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
