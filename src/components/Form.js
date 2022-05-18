import React, { Fragment, useState } from "react";

function Form({ createAppointment }) {
  const initialState = {
    mascot: "",
    owner: "",
    date: "",
    time: "",
    symptom: "",
  };

  const [appointment, updateAppointment] = useState(initialState);
  const [error, updateError] = useState(false);

  const updateState = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const sendAppointment = (e) => {
    e.preventDefault();
    if (
      appointment.mascot === "" ||
      appointment.owner === "" ||
      appointment.date === "" ||
      appointment.time === "" ||
      appointment.symptom === ""
    ) {
      updateError(true);
      return;
    } else {
      updateError(false);
      createAppointment(appointment);
      updateAppointment(initialState);
    }
    createAppointment(appointment);
    updateAppointment(initialState);
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form onSubmit={sendAppointment}>
        <label>Mascot name</label>
        <input
          type="text"
          name="mascot"
          className="u-full-width"
          placeholder="Mascot name"
          onChange={updateState}
          value={appointment.mascot}
        />

        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={updateState}
          value={appointment.owner}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={updateState}
          value={appointment.date}
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={updateState}
          value={appointment.time}
        />

        <label>Symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange={updateState}
          value={appointment.symptom}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">
          Add
        </button>
      </form>
      {error  ? <div  className="button button-primary u-full-width">Empty fields</div>  : null}
    </Fragment>
  );
}

export default Form;
