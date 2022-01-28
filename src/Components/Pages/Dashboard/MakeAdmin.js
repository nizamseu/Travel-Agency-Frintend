import React, { useState } from "react";
import "./makeAdmin.css";
import axios from "axios";
import { Button, Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import AlertMessage from "../../../utility/ConfirmAlert";
const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");

  const HandleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleAdmin = async () => {
    const email = { email: adminEmail };
    if (adminEmail.length > 0) {
      const result = await axios.put(
        "https://pacific-retreat-04444.herokuapp.com/makeAdmin",
        email
      );
      if (result?.data?.modifiedCount > 0) {
        AlertMessage("Updated");
      }
    }
  };
  return (
    <div>
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper elevation="24">
          <Box>
            <img
              width="100%"
              height="250px"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F28%252F2017%252F02%252Ftianmen-mountain-hunan-china-SCARYDRIVE0217.jpg&q=85"
            />
          </Box>

          <div>
            <h3 className="my-4 text-center text-info fst-italic">
              Make an Admin
            </h3>
            <input
              onBlur={HandleOnBlur}
              type="text"
              className="mail"
              placeholder="Your email address"
              name="mail"
              required
            />
            <Button
              onClick={handleAdmin}
              sx={{ width: "100%", height: "50px", fontSize: "20px" }}
              variant="contained"
              color="error"
            >
              {" "}
              Apply Now{" "}
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default MakeAdmin;
