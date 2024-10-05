import React from 'react';
import ProductList from './ProductList';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/cartSlice';
import Button from '@mui/material/Button';
import StarRating from './StarRating';
import { Typography, Card, Badge, Box } from '@mui/material';

function Home() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <section className="py-5">
        <Typography variant="h2" className="trendy text-center">TRENDY SPOT !..</Typography>
        
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={3}
          sx={{ padding: 2 }}
        >
          {ProductList.map((product) => (
            <Box 
              key={product.id} 
              flexBasis={{ xs: '40%', sm: '25%', md: '25%', lg: '12%' }} 
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 2, width: '100%' }}>
                {product.isOnSale && (
                  <Badge color="secondary" badgeContent="Sale" sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                  </Badge>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ height: 200, objectFit: 'cover', width: '100%' }}
                />
                <div style={{ padding: '16px', flex: 1 }}>
                  <Typography variant="h6"  align="center">
                    {product.name}
                  </Typography>
                  <Typography variant="body2"  align="center" style={{ fontSize: '15px' }}>
                    {product.subname}
                  </Typography>
                  <Typography variant="body1" color="#f44336" align="center" style={{ fontSize: '20px' }}>
                    ₹{product.price}
                  </Typography>
                  <StarRating rating={product.rating} />
                </div>
                <div style={{ flexGrow: 1 }} />
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <Button variant="contained" onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </Button>
                </div>
              </Card>
            </Box>
          ))}
        </Box>
      </section>
    </div>
  );
}

export default Home;

