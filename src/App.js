import React, { useState, Fragment, useEffect } from "react";
import Appointment from "./components/Appointment";
import Form from "./components/Form";

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));

  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, saveAppointment] = useState(initialAppointments);

  const createAppointment = (appointment) => {
    const newsAppointments = [...appointments, appointment];
    saveAppointment(newsAppointments);
  };

  const deleteAppointment = (index) => {
    const newsAppointments = [...appointments];
    newsAppointments.splice(index, 1);
    saveAppointment(newsAppointments);
  };

  const title =
    Object.keys(appointments).length === 0
      ? "Not appointments"
      : "Manage appointments  here";

  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem("appointments"));

    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  },  [appointments]);

  return (
    <Fragment>
      <h2>Patient Manager</h2>;
      <div className="container">
        <div className="row">
          <div className="one-half  column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half  column">
            <h2>{title}</h2>
            {appointments.map((appointment, index) => (
              <Appointment
                key={index}
                index={index}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
