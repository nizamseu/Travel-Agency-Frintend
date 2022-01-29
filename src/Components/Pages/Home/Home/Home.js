import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Destinations from "../../Destinations/Destinations";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* destination   */}
      <Grid
        spacing={2}
        sx={{
          my: 1,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        {/* side bar  */}
        <Grid item xs={12} sm={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
          {" "}
          <Destinations></Destinations>
          <Reviews></Reviews>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Home;
