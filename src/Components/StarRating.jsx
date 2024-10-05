import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} sx={{ color: '#fbc02d' }} />
      ))}
      {halfStars === 1 && <StarHalfIcon sx={{ color: '#fbc02d' }} />}
      {[...Array(emptyStars)].map((_, index) => (
        <StarBorderIcon key={index} sx={{ color: '#fbc02d' }} />
      ))}
    </Box>
  );
}

export default StarRating;
