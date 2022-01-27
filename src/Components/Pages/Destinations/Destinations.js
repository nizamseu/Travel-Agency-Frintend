import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import DestinationCard from "./DestinationCard";
const Destinations = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = "https://shielded-crag-67014.herokuapp.com/getItems";
    axios.get(url).then((res) => {
      setItem(res.data);
    });
  }, []);
  console.log("item", item);
  return (
    <div>
      <h1>Top Destination</h1>
      <Grid container>
        {item && item.map((item) => <DestinationCard item={item} />)}
      </Grid>
    </div>
  );
};

export default Destinations;
