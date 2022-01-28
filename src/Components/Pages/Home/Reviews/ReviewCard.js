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
import { Button, Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import axios from "axios";
import AlertMessage from "../../../../utility/ConfirmAlert";

const ReviewCard = ({ item, isAdmin }) => {
  const navigate = useNavigate();
  const { img, name, email, ratting, review, category, date, time, _id } = item;

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/review/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        navigate("/dashboard");
        AlertMessage("Deleted");
      }
    });
  };
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Rating sx={{ m: 1 }} value={ratting} readOnly />{" "}
        {isAdmin && <Button onClick={() => handleDelete(_id)}>Delete</Button>}
      </Box>
    </Card>
  );
};

export default ReviewCard;
