import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/useFirebase";
import { Category } from "@mui/icons-material";
import useAuth from "../../../Hooks/useAuth";

const AlertMessage = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1000,
  });
};

const AddReview = () => {
  const { user } = useAuth();

  const [loadCategory, setLoadCategory] = useState([]);
  const [category, setCategory] = useState("");
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    const url = "http://localhost:5000/addBlog";
    axios.get(url).then((res) => {
      setLoadCategory(res.data);
    });
  }, []);

  const onSubmit = (data, e) => {
    var now = new Date();
    let time = new Date().toLocaleString().split(",")[1];

    data.name = user.displayName;
    data.email = user.email;
    data.date = now.toLocaleDateString();
    data.time = time;
    data.category = category;
    console.log(data);
    axios.post("http://localhost:5000/addReview", data).then((res) => {
      AlertMessage();
    });
    e.target.reset();
  };

  const onChange = (e) => {
    setCategory(e.target.value);
  };

  console.log(category);
  return (
    <div>
      <Box
        className="reviewBox"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ py: 1, px: 5 }}>
          <h2>Add Your Review</h2>
          <form className="review" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              defaultValue={user?.displayName}
              disabled
            />{" "}
            <br />
            {errors.name && <p className="error">Maximum 30 Charachter</p>}
            <input
              {...register("email")}
              defaultValue={user?.email}
              disabled
            />{" "}
            <br />
            {errors.email && <p className="error">Maximum 20 Charachter</p>}
            <input
              {...register("img", { required: true })}
              placeholder="Photo URL"
            />{" "}
            <br />
            {errors.img && <p className="error">This field is required</p>}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                },
              }}
            >
              <input
                style={{ width: "100%", marginRight: "10px" }}
                type="number"
                {...register("ratting", { min: 1, max: 5 })}
                placeholder="Ratting"
              />{" "}
              <br />
              {errors.ratting && (
                <span className="error">Ratting Between 1 to 5</span>
              )}
            </Box>
            <label style={{ fontSize: "20px", margin: "30px 0" }}>
              {"Category"}
            </label>
            <br />
            {loadCategory && (
              <select
                style={{ height: "50px", margin: "20px 0", width: "100%" }}
                name={Category}
                onChange={onChange}
              >
                {loadCategory.map((item) => (
                  <option value={item?.title}>{item?.title}</option>
                ))}
              </select>
            )}
            <br />
            <textarea
              {...register("review", { required: true }, { min: 150 })}
              placeholder="Your Review"
            />{" "}
            <br />
            {errors.review && <p className="error">Minimum 150 Character</p>}
            <input className="btn" value="Add Now" type="submit" />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default AddReview;
