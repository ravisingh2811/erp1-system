import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SocialFlow from "./Socialicon";

function Skill() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Sidebar />
        <Card style={{ width: 100 + "vh", minHeight: 35 + "vh" }}>
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{ fontSize: 25, fontWeight: "bolder" }}
              variant="h1"
            >
              Technical Skills
            </Typography>
            <hr />
            <Stack
              direction="column"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Typography variant="h2">
                {" "}
                <span style={{ fontSize: 18, fontWeight: "bolder" }}>
                  Languages:
                </span>{" "}
                C++, Java, PHP, JavaScript{" "}
              </Typography>
              <Typography variant="h2">
                {" "}
                <span style={{ fontSize: 18, fontWeight: "bolder" }}>
                  Technologies:
                </span>{" "}
                Git, GitHub, jQuery, Ajax, ReactJs, NodeJs, Bootstrap, HTML,
                CSS, Postman, WordPress, Visual Studio Code Concepts: Operating
                Systems, Data Structure and Algorithm, Oops, Networking, System
                Design{" "}
              </Typography>
              <Typography variant="h2">
                {" "}
                <span style={{ fontSize: 18, fontWeight: "bolder" }}>
                  General:
                </span>{" "}
                Flexibility, Team Work, Effective Communication, Determination,
                Quick learner, Problem-Solving{" "}
              </Typography>
            </Stack>
          </Box>
        </Card>
      </div>
    </>
  );
}

export default Skill;
//
// Python
// Technologies:
// General:
