import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CategoryIcon from "@mui/icons-material/Category";
import { ButtonLogoutClose, ButtonLogoutOpen } from "../auth/components/ButtonLogout";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const handleCloseSideBar = () => {
    setIsOpen(false);
  };
  const handleOpenSideBar = () => {
    setIsOpen(true);
  };

  const handleDashboard = () => {
    navigate("/");
  };

  const handleProduct = () => {
    navigate("product");
  };

  return (
    <aside className='bg-[#04BADE]'>
      {isOpen ? (
        <div className='flex flex-col px-8 pb-2 max-h-min min-h-screen w-[250px] transition-all duration-300 ease-in-out'>
          <button onClick={handleCloseSideBar} className='w-full pb-8 text-white text-[34px] text-end'>
            <CloseIcon />
          </button>
          <div className='flex flex-col flex-grow justify-between'>
            <div className='col'>
              <button onClick={handleDashboard} className='flex items-center min-h-[44px] bg-light w-full text-white'>
                <HomeIcon />
                <h5 className='ms-6'>Dashboard</h5>
              </button>
              <hr className='bg-white' />
              <button onClick={handleProduct} className='flex items-center min-h-[44px] bg-light w-full text-white'>
                <CategoryIcon />
                <h5 className='ms-6'>Product</h5>
              </button>
              <hr className='bg-white' />
            </div>
            <div className='col'>
              <hr className='bg-white' />
              <ButtonLogoutOpen />
              <hr className='bg-white' />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col px-8 pb-2 max-h-min min-h-screen w-[75px] transition-all duration-300 ease-in-out'>
          <div className='flex justify-center'>
            <button onClick={handleOpenSideBar} className='pb-8 text-white text-[34px]'>
              <MenuIcon />
            </button>
          </div>
          <div className='flex flex-col justify-between items-center flex-grow'>
            <div className='col'>
              <hr className='bg-white' />
              <button onClick={handleDashboard} className='flex items-center my-2 justify-center text-white'>
                <HomeIcon fontSize='large' />
              </button>
              <hr className='bg-white' />
              <button onClick={handleProduct} className='flex items-center my-2 justify-center text-white'>
                <CategoryIcon fontSize='large' />
              </button>
              <hr className='bg-white' />
            </div>
            <div className='col'>
              <hr className='bg-white' />
              <ButtonLogoutClose />
              <hr className='bg-white' />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
