import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleRegist = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", JSON.stringify({ username, password }), {
        headers: { "Content-Type": "application/json" },
      });
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      setAuth(true);
      navigate("/");
      console.log(response.data);
      console.log("token:" + token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <div className='flex min-h-screen justify-center items-center bg-gradient-to-r from-[#006CA5] from-35% via-[#04BADE] to-[#55E2E9]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-14 justify-center bg-white w-[498px] h-[578px] rounded-[10px] p-[38px] shadow-[-10px_10px_8px_rgba(0,0,0,0.2)]'>
          <h1 className='text-center '>Login</h1>
          <div className='grid gap-4 '>
            <FormControl variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-username'>Username</InputLabel>
              <OutlinedInput
                id='outlined-adornment-username'
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "username",
                }}
                label='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "password",
                }}
                label='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
              />
            </FormControl>
            <div className='flex justify-between'>
              <small>
                <button onClick={handleRegist} className='text-blue-600'>
                  didn't have any account ? <u>Register</u>
                </button>
              </small>
              <small>
                <button className='text-blue-600'>Forgot Password ?</button>
              </small>
            </div>
          </div>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
