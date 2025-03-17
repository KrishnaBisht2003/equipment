// 'use client';

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HalfRating: React.FC = () => {
  const [ratingValue, setRatingValue] = React.useState<number | null>(2.5);

  const handleChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRatingValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        name="half-rating"
        value={ratingValue}
        precision={0.5}
        onChange={handleChange}
        size="medium"
      />
      <Rating
        name="half-rating-read"
        value={ratingValue}
        precision={0.5}
        size = "large"
        readOnly
      />
      <div>Current Rating: {ratingValue}</div>
    </Stack>
  );
};

export default HalfRating;