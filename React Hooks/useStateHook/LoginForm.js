import React, { useState } from "react";
import { render } from "react-dom";

const LoginForm = () => {
  const [form, setState] = useState({
    username: "",
    password: ""
  });

  const printValues = event => {
    event.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = event => {
    setState({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form>
      <p>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={updateField}
            value={form.username}
          />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={updateField}
            value={form.password}
          />
        </label>
      </p>
      <button onClick={printValues}>Submit</button>
    </form>
  );
};

render(<LoginForm />, document.querySelector("#root"));
