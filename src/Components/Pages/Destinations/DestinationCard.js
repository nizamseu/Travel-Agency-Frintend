import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ item }) => {
  const { banner, description, location, title, _id, cost } = item;
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
          <Box sx={{ height: "250px", overflow: "hidden" }}>
            <h1>{title}</h1>
            <h4>{description.slice(0, 150)}</h4>
            <h2>Cost:{cost}TK</h2>
            <h3 style={{ marginTop: "20px" }}>Location: {location} </h3>
            {/* <p>{description}</p> */}
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
};

export default DestinationCard;
