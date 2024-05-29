import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const EditModal = () => {
  const [editOpen, setEditOpen] = useState(false); // Ganti nama variabel menjadi editOpen
  const handleOpenEdit = () => {
    setEditOpen(true);
  };
  const handleCloseEdit = () => {
    // onClose();
    setEditOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenEdit}>
        <EditIcon />
      </Button>
      <Modal open={editOpen} onClose={handleCloseEdit} aria-labelledby='child-modal-title' aria-describedby='child-modal-description'>
        <Box sx={{ ...style, width: 200 }}>
          <h2 id='child-modal-title'>Edit Cart Items</h2>
          <p id='child-modal-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <Button onClick={handleCloseEdit}>Close Edit Modal</Button>
        </Box>
      </Modal>
    </>
  );
};

const CartModal = ({ open, onClose }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const handleOpen = () => {
    setCartOpen(true);
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log("All Products", response.data);
      setProduct(response.data);
    });

    axios.get("https://fakestoreapi.com/carts").then((response) => {
      console.log("CART LOG", response.data);
      // setCart(response.data);
      if (Array.isArray(response.data)) {
        const cartItems = response.data.flatMap((cart) => cart.products);
        console.log("cart items", cartItems);
        setCart(cartItems);
      }
    });
  };
  const handleClose = () => {
    setCartOpen(false);
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <button onClick={handleOpen}>
        <ShoppingCartIcon color='primary' />
      </button>
      <Modal open={cartOpen} onClose={handleClose} aria-labelledby='parent-modal-title' aria-describedby='parent-modal-description'>
        <Box sx={{ ...style, width: 700, height: 550, borderRadius: 3, border: "none" }}>
          <h2 className='mb-5' id='parent-modal-title'>
            Cart
          </h2>
          <div className='overflow-y-scroll' style={{ height: 350 }}>
            {cart.map((cart) => (
              <div className='flex justify-between items-center border border-black rounded-[10px] px-4 py-2 mb-4'>
                <div className='flex flex-col'>
                  <small>
                    <strong>Product ID :</strong> {cart.productId}
                  </small>
                  <small>
                    <strong>Quantity :</strong> {cart.quantity}
                  </small>
                </div>
                <div className='flex gap-2 items-center'>
                  <EditModal />
                  <DeleteIcon color='error' />
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CartModal;
