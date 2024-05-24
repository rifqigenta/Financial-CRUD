import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState({});
  const [address, setAddress] = useState({});
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className='flex min-h-screen justify-center items-center bg-gradient-to-r from-[#006CA5] from-35% via-[#04BADE] to-[#55E2E9]'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center bg-white w-[498px] min-h-[578px] rounded-[10px] p-[38px] shadow-[-10px_10px_8px_rgba(0,0,0,0.2)]'>
          <h1 className='text-center mb-10'>Register</h1>
          <div className='flex flex-row gap-4'>
            <FormControl>
              <InputLabel htmlFor='outlined-adornment-password'>First Name</InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "password",
                }}
                label='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor='outlined-adornment-password'>Last Name</InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "password",
                }}
                label='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
          </div>
          <div className='grid gap-4 '>
            <FormControl variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
              <OutlinedInput
                id='outlined-adornment-email'
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  "aria-label": "email",
                }}
                label='Username'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
              />
            </FormControl>
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
                <button onClick={handleLogin} className='text-blue-600'>
                  already have an account ? <u>Login</u>
                </button>
              </small>
              <small>
                <button className='text-blue-600'>Forgot Password ?</button>
              </small>
            </div>
          </div>
          <div className='grid mt-10'>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
