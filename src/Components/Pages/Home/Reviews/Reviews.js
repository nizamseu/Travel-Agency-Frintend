import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviewData, setReviewdata] = React.useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/getReviews";
    axios.get(url).then((res) => {
      setReviewdata(res.data);
    });
  }, []);

  console.log("review", reviewData);
  return (
    <div>
      <h1>Reviews</h1>
      <Grid container>
        {reviewData?.map((item) => (
          <ReviewCard item={item}></ReviewCard>
        ))}
      </Grid>
    </div>
  );
};

export default Reviews;
