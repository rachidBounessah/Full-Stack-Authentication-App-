import React from "react";
import styles from "../styles/form.module.css";
const LoginForm = () => {
  return (
    <from className={styles.form}>
      <fieldset>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" required />
      </fieldset>
      <fieldset>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" required />
      </fieldset>
      <button type="submit">Signin</button>
    </from>
  );
};

export default LoginForm;
