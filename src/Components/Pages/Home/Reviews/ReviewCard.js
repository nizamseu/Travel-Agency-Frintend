import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ReviewCard = ({ item }) => {
  console.log(item);
  const { img, name, email, ratting, review, category, date, time } = item;
  return (
    <Card
      item
      xs={12}
      sm={9}
      md={6}
      lg={4}
      sx={{
        maxWidth: { xs: "100%", sm: "100%", md: "300px", lg: "450px" },
        m: 2,
        justifyContent: "center",
        mx: "auto",
        a: { textDecoration: "none" },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name.split("")[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date + time}
      />
      <Link to={"/reviewDetails"}>
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {review.slice(0, 200)}
          </Typography>
        </CardContent>
      </Link>
      <Rating sx={{ m: 1 }} value={ratting} readOnly />
    </Card>
  );
};

export default ReviewCard;
