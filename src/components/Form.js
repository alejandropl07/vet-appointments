import React, { Fragment, useState } from "react";

function Form({ createAppointment }) {
  const [appointment, updateAppointment] = useState({
    mascot: "",
    owner: "",
    date: "",
    time: "",
    symptom: "",
  });

  const updateState = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const sendAppointment = (e) => {
    e.preventDefault();
    createAppointment(appointment);
    console.log(appointment);
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
        />

        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={updateState}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={updateState}
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={updateState}
        />

        <label>Symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange={updateState}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">
          Add
        </button>
      </form>
    </Fragment>
  );
}

export default Form;
