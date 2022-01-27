import React from "react";
import Button from "@mui/material/Button";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    {
      url: "https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/coming-soon-background-img.jpg",
    },
    {
      url: "https://nerdymates.com/static/img/regular/shutterstock_1044339595.jpg",
    },
    {
      url: "http://gotravelingtoday.com/wp-content/uploads/537460174.jpg",
    },
    {
      url: "https://blog.pricekart.com/2021/09/W020200615796304356517.jpg",
    },
    {
      url: "https://cdn2.f-cdn.com/contestentries/927578/18584425/587bb1a7d9007_thumb900.jpg",
    },
    {
      url: "https://cdn5.f-cdn.com/contestentries/927578/8154646/587de3d876346_thumb900.jpg",
    },
    {
      url: "https://www.2yodoindia.com/wp-content/uploads/2021/04/Daiwa-4K-UHD-Smart-TV-D50162FL-Launched-in-India.jpg",
    },
    {
      url: "https://yourshoppy.com/wp-content/uploads/2021/04/UX482.jpg",
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
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/products"}
        >
          Explore Yor Dream
        </Link>
      </Button>
    </div>
  );
};

export default Banner;
