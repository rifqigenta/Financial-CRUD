import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/auth/components/PrivateRoute";
import Sidebar from "./components/layout/Sidebar";
import Layout from "./components/layout/Layout";
import Product from "./pages/Product";

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      {/* Protected Routes */}
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='product' element={<Product />} />
        </Route>
      </Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default App;
