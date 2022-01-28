import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Grid, Paper, Rating } from "@mui/material";
import "../AddBlogArticle/style.css";
import "./detail.css";
import ReviewCard from "../Home/Reviews/ReviewCard";
const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  console.log("id", id);
  useEffect(() => {
    const url = `https://pacific-retreat-04444.herokuapp.com/findBlog/${id}`;
    axios.get(url).then((data) => {
      setDetail(data.data);
      findReview(data.data.title);
    });
  }, [id]);

  const findReview = (category) => {
    const url = `https://pacific-retreat-04444.herokuapp.com/findReview/${category}`;
    axios.get(url).then((data) => {
      setReviewData(data.data);
    });
  };

  console.log(reviewData);

  return (
    <div>
      <Grid>
        <div className="container">
          <img
            className="image"
            style={{ width: "100%", height: "450px" }}
            src={detail.banner}
            alt=""
          />
          <div className="middle">
            <h1 style={{ color: "white", fontSize: "70px", fontWeight: "900" }}>
              {detail.title}
            </h1>
          </div>
        </div>
      </Grid>
      <Grid container spacing={3}>
        {/* for image and detail  */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <div style={{ margin: "10px 30px" }}>
            <div>
              <h1>Over View</h1>
              <img
                height="300px"
                width={"100%"}
                src={detail.thumbnail}
                alt=""
              />
            </div>
            <div>
              <p
                style={{
                  margin: "30px 0",
                  textAlign: "justify",
                  fontSize: "16px",
                }}
              >
                {detail.description}{" "}
              </p>
            </div>
          </div>
        </Grid>

        {/* basix information  */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <h1 style={{ marginLeft: "30px" }}>Details Information</h1>
          <Grid sx={{ my: "10px", mx: 5 }}>
            <h1> Name: {}</h1>
            <h2>Location:{}</h2>
            <h3> Price:{}</h3>
            <h3 style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <Rating sx={{ m: 1 }} value={5} readOnly /> [31]
            </h3>
            <br />
            <Button sx={{ my: 5 }}>Add Your Experience</Button>
          </Grid>
        </Grid>

        {/* user review  */}
        <Grid container sx={{ mx: 2 }}>
          {reviewData?.map((item) => (
            <ReviewCard item={item}></ReviewCard>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
