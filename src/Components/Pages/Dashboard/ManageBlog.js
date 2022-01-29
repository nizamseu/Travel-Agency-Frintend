import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AlertMessage from "../../../utility/ConfirmAlert";

const ManageBlog = () => {
  const [filterData, setFilterData] = useState("");
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    fetch(`https://pacific-retreat-04444.herokuapp.com/blogByStatus/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          AlertMessage("Deleted");
          const remainingProducts = blog.filter((pd) => pd._id !== id);
          setBlog(remainingProducts);
        }
      });
  };

  const handleStatus = (id) => {
    fetch(`https://pacific-retreat-04444.herokuapp.com/blogByStatus/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          blog.filter((pd) => pd._id !== id);
          fetch("https://pacific-retreat-04444.herokuapp.com/blogByStatus")
            .then((res) => res.json())
            .then((data) => {
              setBlog(data);
            });
        }
      });
  };

  useEffect(() => {
    fetch("https://pacific-retreat-04444.herokuapp.com/blogByStatus")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setBlog(data);
      });
  }, []);

  useEffect(() => {
    const restData = blogs.filter((item) => item.status === filterData);
    if (filterData !== "all") {
      setBlog(restData);
    } else setBlog(blogs);
  }, [filterData]);

  const handleFilter = (name) => {
    setFilterData(name);
  };

  return (
    <div>
      <Box>
        <Button variant="outlined" onClick={() => handleFilter("all")}>
          All
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("approve")}>
          Approved
        </Button>
        <Button variant="outlined" onClick={() => handleFilter("pending")}>
          Pending
        </Button>
      </Box>
      <Typography
        variant="h5"
        className="primary-color"
        sx={{ textAlign: "center", fontWeight: "bold", marginY: "5px" }}
      >
        {" "}
        All Blog Article
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Title
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Location
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Cost
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Status
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Make Status
              </TableCell>
              <TableCell style={{ fontWeight: 600 }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blog?.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row?.title}</TableCell>
                <TableCell align="right">{row?.location}</TableCell>
                <TableCell align="right">${row?.cost} </TableCell>
                <TableCell
                  align="right"
                  sx={
                    row.status == "pending"
                      ? { bgcolor: "error.main", textAlign: "center" }
                      : { bgcolor: "success.main", textAlign: "center" }
                  }
                  className="textWhite"
                >
                  {row?.status}{" "}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color={row?.status === "pending" ? "error" : "success"}
                    onClick={() => handleStatus(row._id)}
                  >
                    {row?.status === "pending" ? "Make Approve" : "Approved"}
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => handleDelete(row._id)}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageBlog;
