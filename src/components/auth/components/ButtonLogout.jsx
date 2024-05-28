import React from "react";
import { useAuth } from "../../../context/AuthProvider";
import LogoutIcon from "@mui/icons-material/Logout";

export const ButtonLogoutOpen = () => {
  const { logout } = useAuth();
  return (
    <button onClick={logout} className='flex items-center min-h-[44px] bg-light w-full text-white'>
      <LogoutIcon fontSize='large' />
      <h5 className='ms-6'>Logout</h5>
    </button>
  );
};

export const ButtonLogoutClose = () => {
  const { logout } = useAuth();
  return (
    <button onClick={logout} className='flex items-center my-2 justify-center text-white'>
      <LogoutIcon fontSize='large' />
    </button>
  );
};
