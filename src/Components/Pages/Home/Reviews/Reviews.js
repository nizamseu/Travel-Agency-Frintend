import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import Swal from "sweetalert2";

const Reviews = () => {
  const [reviewData, setReviewdata] = React.useState([]);

  useEffect(() => {
    const url = "https://pacific-retreat-04444.herokuapp.com/getReviews";
    axios.get(url).then((res) => {
      setReviewdata(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log("ffg", id);
  };
  return (
    <div>
      <h1>Reviews</h1>
      <Grid container>
        {reviewData?.map((item) => (
          <ReviewCard
            handleDelete={handleDelete}
            item={item}
            isAdmin={false}
          ></ReviewCard>
        ))}
      </Grid>
    </div>
  );
};

export default Reviews;
