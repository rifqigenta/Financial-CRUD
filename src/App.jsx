import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/auth/components/PrivateRoute";

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      // Public Routes
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      // Protected Routes
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default App;
