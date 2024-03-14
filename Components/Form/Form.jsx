import { useState } from "react";

export default function Form({ setNumberOfDogs }) {
  // How can we manage the number of dogs?

  const [inputText, setInputText] = useState("");

  const submitNumbers = (e) => {
    e.preventDefault();
    setNumberOfDogs(parseInt(inputText));
  };
  return (
    <form onSubmit={submitNumbers}>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label className="form-label">Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          WOOF!
        </button>
      </div>
    </form>
  );
}
