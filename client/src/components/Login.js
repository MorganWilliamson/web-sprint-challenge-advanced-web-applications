import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", formState)
      .then((res) => {
        localStorage.setItem("token", res.data.payload)
        history.push("/bubble-page")
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit} >
        Username: 
        <input 
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formState.username}
          onChange={handleChange}
        />

        Password: 
        <input 
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formState.password}
          onChange={handleChange}
        />

        <button onSubmit={handleSubmit}>Login</button>
      </form>
    </>
  );
};

export default Login;
