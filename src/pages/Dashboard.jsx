import { Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import ButtonLogout from "../components/auth/components/ButtonLogout";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });

    axios.get("https://fakestoreapi.com/products/categories").then((response) => {
      setCategory(response.data);
    });
  }, []);

  return (
    <>
      <div className='flex flex-col ms-5 my-5'>
        <div className='flex gap-8'>
          <div className='rounded-[10px] border border-green-400 px-8 py-4 shadow-[5px_5px_10px_rgba(0,0,0,0.2)]'>
            <h5>Total Product : {product.length}</h5>
          </div>
          <div className='rounded-[10px] border border-green-400 px-8 py-4 shadow-[5px_5px_10px_rgba(0,0,0,0.2)]'>
            <h5>Total Category : {category.length}</h5>
          </div>
        </div>
        <hr className='my-5' />
      </div>
    </>
  );
};

export default Dashboard;
