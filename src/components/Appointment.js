import React from "react";

function Appointment({ appointment, deleteAppointment,  index }) {
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
      <button
        type="button"
        onClick={() => deleteAppointment(index)}
        className="button   eliminar    u-full-width"
      >
        Delete
      </button>
    </div>
  );
}

export default Appointment;
