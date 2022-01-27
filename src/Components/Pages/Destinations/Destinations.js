import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Pagination } from "@mui/material";
import DestinationCard from "./DestinationCard";
const Destinations = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/addBlog";
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Top Destination</h1>
      <Grid container>
        {item && item.map((item) => <DestinationCard item={item} />)}
      </Grid>
      <Pagination count={10} color="primary" />
    </div>
  );
};

export default Destinations;
