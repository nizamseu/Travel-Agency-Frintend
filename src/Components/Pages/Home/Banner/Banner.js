import React from "react";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    {
      url: "https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-slide-1.jpg",
    },
    {
      url: "https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/coming-soon-background-img.jpg",
    },
    {
      url: "https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-5-slide-1.jpg",
    },
    {
      url: "https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-1-slide-4.jpg",
    },
    {
      url: "https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-5-slide-2.jpg",
    },
    {
      url: "https://voyage.qodeinteractive.com/wp-content/uploads/2016/04/home-5-slide-5.jpg",
    },
  ];
  return (
    <div>
      <SimpleImageSlider
        style={{ position: "relative" }}
        width={"100%"}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
      />
      <Button
        variant="contained"
        color="error"
        style={{
          zIndex: 2,
          marginTop: "-100px",
          marginLeft: "100px",
          position: "absolute",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to={"/blog"}>
          Explore Yor Dream
        </Link>
      </Button>
    </div>
  );
};

export default Banner;
