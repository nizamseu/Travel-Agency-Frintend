import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Pagination } from "@mui/material";
import DestinationCard from "./DestinationCard";
const Destinations = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const size = 10;
  useEffect(() => {
    const url = `https://pacific-retreat-04444.herokuapp.com/addBlog?page=${page}&size=${size}`;
    axios.get(url).then((res) => {
      setItem(res.data.blogsData);
      const count = res.data.count;
      const pageNumber = Math.ceil(count / size);
      setPageCount(pageNumber);
    });
  }, [page]);

  return (
    <div>
      <h1>Destination</h1>
      <Grid container>
        {item && item.map((item) => <DestinationCard item={item} />)}
      </Grid>
      <Pagination
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        count={pageCount}
        color="primary"
        variant="outlined"
        onChange={(event, value) => setPage(--value)}
      />
    </div>
  );
};

export default Destinations;
