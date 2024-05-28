import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { Badge, Button } from "@mui/material";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });

    axios.get("https://fakestoreapi.com/carts").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <div className='flex mx-5 my-5 justify-between items-center'>
        <h3>Checkout</h3>
        <Badge badgeContent={cart.length} color='primary'>
          <ShoppingCartIcon color='primary' />
        </Badge>
      </div>
      <hr className='mx-5 my-5' />
      <div className='grid grid-cols-4 gap-6 mx-5 max-h-[85vh] overflow-y-scroll overflow-x-hidden'>
        {/* <div className='flex gap-4'> */}
        {product.map((product) => (
          <div key={product} className='card min-w-[250px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.2)] px-2'>
            <img src={product.image} alt={product.image} className='max-h-[150px] h-[150px] mx-auto my-2' />
            <h6 className='overflow-hidden h-[150px] max-h-[30px]'>{product.title}</h6>
            <p className='overflow-hidden h-[150px] max-h-[75px] my-4'>{product.description}</p>
            <p className='text-end text-green-600 font-bold'>${product.price}</p>
            <div className='my-2'>
              <Button>Add</Button>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default Product;
