import React from "react";

function Appointment({ appointment }) {
  return (
    <div className="cita">
      <p>
        Mascot: <span>{appointment.mascot}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Symptom: <span>{appointment.symptom}</span>
      </p>
    </div>
  );
}

export default Appointment;
