import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import ReviewCard from "../Home/Reviews/ReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviewData, setReviewdata] = useState([]);

  useEffect(() => {
    const url = `https://pacific-retreat-04444.herokuapp.com/userReviews/${user.email}`;
    axios.get(url).then((res) => {
      setReviewdata(res.data);
    });
  }, [user.email]);

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

export default MyReviews;
