import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='flex min-h-screen'>
        <Sidebar />
        <main className='flex-grow'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
