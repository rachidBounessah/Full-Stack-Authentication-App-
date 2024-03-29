import React from "react";
import styles from "../styles/form.module.css";
const SignupForm = () => {
  return (
    <from className={styles.form}>
      <fieldset>
        <label htmlFor="frirst_name">email</label>
        <input type="text" name="frirst_name" id="frirst_name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="last_name">email</label>
        <input type="text" name="last_name" id="last_name" required />
      </fieldset>
      <fieldset>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" required />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" required />
      </fieldset>
      <button type="Signup">Signin</button>
    </from>
  );
};

export default SignupForm;
