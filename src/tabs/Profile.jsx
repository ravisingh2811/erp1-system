import React from "react";
import Sidebar from "../component/sidebar";
import Navbar from "../component/Navbar";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";

import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";

import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import SocialFlow from "./Socialicon";

function Profile() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Sidebar />
        <Card style={{ width: 100 + "vh", minHeight: 40 + "vh" }}>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Personal info</Typography>
            <Typography level="body-sm">
              Customize how your profile information will apper to the networks.
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={300}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                  src="../public/usermy.jpg"
                  srcSet="../public/usermy.jpg 5x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: "background.body",
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: 100,
                  top: 170,
                  boxShadow: "sm",
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input
                    size="sm"
                    placeholder="First name"
                    defaultValue={"Ravi"}
                    readOnly
                  />
                  <Input
                    size="sm"
                    placeholder="Last name"
                    defaultValue={"Singh"}
                    sx={{ flexGrow: 1 }}
                    readOnly
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input readOnly size="sm" defaultValue="Software Developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    defaultValue="itsravisingh2811@gmail.com"
                    sx={{ flexGrow: 1 }}
                    readOnly
                  />
                </FormControl>
              </Stack>
              <div>
                <Typography level="title-md">Social Info</Typography>
                <SocialFlow />
              </div>
            </Stack>
          </Stack>
        </Card>
      </div>
    </>
  );
}

export default Profile;
