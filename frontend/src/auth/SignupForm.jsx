import React, { useState } from "react";
import styles from "../styles/form.module.css";
const SignupForm = () => {
  const [userInputs, setUserInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  return (
    <from className={styles.form}>
      <fieldset>
        <label htmlFor="frirst_name">email</label>
        <input
          type="text"
          name="frirst_name"
          id="frirst_name"
          required
          value={userInputs.first_name}
          minLength={5}
          onChange={(e) =>
            setUserInputs((prev) => {
              return { ...prev, first_name: e.target.value };
            })
          }
          //   onChange={(e) =>
          //setUserInputs({ ...userInputs, first_name: e.target.value })
        />
      </fieldset>
      <fieldset>
        <label htmlFor="last_name">email</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          minLength={5}
          required
          value={userInputs.last_name}
          onChange={(e) =>
            setUserInputs((prev) => {
              return { ...prev, last_name: e.target.value };
            })
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={userInputs.email}
          onChange={(e) =>
            setUserInputs((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          minLength={6}
          required
          value={userInputs.password}
          onChange={(e) =>
            setUserInputs((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
      </fieldset>
      <button type="Signup">Signin</button>
    </from>
  );
};

export default SignupForm;
