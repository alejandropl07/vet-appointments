import React, { Fragment } from "react";

function Form() {
  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form>
        <label>Mascot name</label>
        <input
          type="text"
          name="mascot"
          className="u-full-width"
          placeholder="Mascot name"
        />

        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
        />

        <label>Date</label>
        <input type="date" className="u-full-width" name="date" />

        <label>Time</label>
        <input type="time" className="u-full-width" name="time" />

        <label>Symptom</label>
        <textarea className="u-full-width" name="symptom"></textarea>

        <button type="submit" className="button-primary u-full-width">
          Add
        </button>
      </form>
    </Fragment>
  );
}

export default Form;
