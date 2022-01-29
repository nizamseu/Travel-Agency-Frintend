import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = "https://pacific-retreat-04444.herokuapp.com/blogByStatus";
    axios.get(url).then((res) => {
      const data = res.data;
      const sortData = data.sort((a, b) => parseInt(b.cost) - parseInt(a.cost));

      setItem(sortData);
    });
  }, []);

  console.log(item);

  return (
    <Grid sx={{ mx: 1 }}>
      <h3>Top Site</h3>
      {item.map((i) => (
        <h4>
          <Link to={`/detail/${i._id}`}>{i.title}</Link> ({i.cost}TK)
        </h4>
      ))}
    </Grid>
  );
};

export default Sidebar;
