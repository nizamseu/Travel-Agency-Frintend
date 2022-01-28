import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "../Home/Reviews/ReviewCard";
import Reviews from "../Home/Reviews/Reviews";

const ManageReviews = () => {
  const [reviewData, setReviewdata] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/getReviews";
    axios.get(url).then((res) => {
      setReviewdata(res.data);
    });
  }, []);
  return (
    <div>
      <Grid container>
        {reviewData?.map((item) => (
          <ReviewCard item={item} isAdmin={true}></ReviewCard>
        ))}
      </Grid>
    </div>
  );
};

export default ManageReviews;
