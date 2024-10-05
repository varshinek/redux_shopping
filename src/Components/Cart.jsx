import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, removeFromCart, decreaseQuantity } from '../Store/cartSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Cart() {
  const { cartItems, totalAmount, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className='text-center'>Your Cart</h2>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} p={2}>
        <Box flex="2">
          {cartItems.length === 0 ? (
            <Typography variant="h6" align="center">Your cart is empty</Typography>
          ) : (
            <Box display="flex" flexWrap="wrap" gap={2} 
            justifyContent="center" sx={{ padding: 2 }}
            >
              {cartItems.map((item) => (
                <Box 
                key={item.id} 
                flexBasis={{ xs: '50%', sm: '35%', md: '50%', lg: '40%' }} 
                display="flex"
                justifyContent="center"
              >
                <Card key={item.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 2, width: '100%' }}>
                  <img
                     src={item.image}
                    alt={item.name}
                    style={{ height: 400, objectFit: 'cover', width: '100%' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.subname}
                    </Typography>
                    <Typography variant="body2" color="#5e35b1">
                      Price: ₹{item.price}
                    </Typography>
                    <Typography variant="body2" color="#f44336">
                      Quantity:
                      <Button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>-</Button>
                      {item.quantity}
                      <Button onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                    </Typography>
                    <hr />
                    <Typography variant="body2" color="#ffc107">
                      Subtotal: ₹ {item.price * item.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                      Remove
                    </Button>
                  </CardActions>
                </Card>
                </Box> 
              ))}
            </Box>
          )}
        </Box>

        {cartItems.length > 0 && (
          <Box flex="1" sx={{ minWidth: 350 }}>
            <Card sx={{ padding: 2, border: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom color='#2196f3'>
                  Cart Summary
                </Typography>
                <Typography variant="body1">
                  Total Quantity: {totalQuantity}
                </Typography>
                <Typography variant="body1">
                  Total Amount: ₹{totalAmount.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>
    </div>
  );
}
 
export default Cart;

