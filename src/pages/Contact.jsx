import React from "react";
import Sidebar from "../component/sidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex", bgcolor:"#eceff1" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Card sx={{ m: 8 }}>
          
            <CardHeader title={"Contact Us"} subheader={"We're here to help and answer any questions you might have."} sx={{ p: 5, bgcolor: "#f3f4f6" }}>
            </CardHeader>
            <CardContent sx={{ p: 5 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label htmlFor="first-name">First name</label>
                  <TextField
                    id="first-name"
                    placeholder="Enter your first name"
                    variant="outlined"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label htmlFor="last-name">Last name</label>
                  <TextField
                    id="last-name"
                    placeholder="Enter your last name"
                    variant="outlined"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                <label htmlFor="email">Email</label>
                <TextField
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                <label htmlFor="message">Message</label>
                <TextField
                  id="message"
                  placeholder="Enter your message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
              <Button
                variant="contained"
                sx={{ mt: 2, bgcolor: "aliceblue", color: "black" }}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
