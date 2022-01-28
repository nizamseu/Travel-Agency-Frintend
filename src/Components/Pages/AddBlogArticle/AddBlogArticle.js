import React, { useState, useEffect, useLayoutEffect } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
import useFirebase from "../../../Hooks/useFirebase";
import { Category } from "@mui/icons-material";

const AlertMessage = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1000,
  });
};

const AddBlogArticle = () => {
  const { user, admin } = useFirebase();
  const [admiUser, setAdminUser] = useState([]);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    if (admin.role === "admin") {
      data.status = "approved";
    } else {
      data.status = "pending";
    }

    axios
      .post("https://pacific-retreat-04444.herokuapp.com/addBlog", data)
      .then((res) => {
        AlertMessage();
      });
    e.target.reset();
  };

  return (
    <div>
      <Box
        className="reviewBox"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation={3} sx={{ py: 1, px: 5 }}>
          <h2>Add A New Blog Article</h2>
          <form className="review" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("title", { required: true })}
              placeholder="Product Title"
            />{" "}
            <br />
            {errors.title && <p className="error">Maximum 30 Charachter</p>}
            <input
              {...register("location", { required: true, maxLength: 20 })}
              placeholder="Location"
            />{" "}
            <br />
            {errors.location && <p className="error">Maximum 20 Charachter</p>}
            <input
              {...register("banner", { required: true })}
              placeholder="URL For Banner"
            />{" "}
            <br />
            {errors.banner && <p className="error">This field is required</p>}
            <input
              {...register("thumbnail", { required: true })}
              placeholder="URL For Thumbnail"
            />{" "}
            <br />
            {errors.thumbnail && (
              <p className="error">This field is required</p>
            )}
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
                {...register("cost", { min: 10, max: 10000 })}
                placeholder="Cost"
              />{" "}
              <br />
              {errors.cost && (
                <span className="error">Cost Between 10 to 99999</span>
              )}
              <input
                style={{ width: "100%" }}
                type="text"
                disabled
                {...register("category")}
                placeholder="Category"
              />{" "}
              <br />
              {errors.brand && <span className="error">Brand is Requre</span>}
            </Box>
            {/* <label>{"label"}</label>
            <select name={Category} onChange={onChange}>
              {currencies.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>{" "}
            <br /> */}
            <textarea
              {...register("description", { required: true }, { min: 150 })}
              placeholder="Description"
            />{" "}
            <br />
            {errors.description && (
              <p className="error">Minimum 150 Character</p>
            )}
            <input className="btn" value="Add Now" type="submit" />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default AddBlogArticle;
