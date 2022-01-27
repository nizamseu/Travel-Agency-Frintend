import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ item }) => {
  const { banner, description, location, tittel, _id } = item;
  return (
    <Grid item xs={12} sm={9} md={6} lg={4}>
      <Paper
        sx={{
          margin: "10px",
          p: 2,
          a: { textDecoration: "none", color: "black" },
        }}
        elevation={10}
      >
        {/* products images  */}
        <Link to={`/detail/${_id}`}>
          <Box>
            <img width="100%" height="250px" src={banner} alt="" />
          </Box>
          {/* products content  */}
          <Box sx={{ height: "150px", overflow: "hidden" }}>
            <h6>{tittel}</h6>
            <h4>{description.slice(0, 100)}</h4>
            <h3>Location: {location} </h3>
            {/* <p>{description}</p> */}
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
};

export default DestinationCard;
