import { Grid } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div>
      <h1>Reviews</h1>
      <Grid container>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </Grid>
    </div>
  );
};

export default Reviews;
