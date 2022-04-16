import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Stack,
  Link
} from "@mui/material";
import navBarSx from "./navBarSx";

const paths = [
  { url: "/", pathText: "Home" },
  { url: "/friends", pathText: "Friends" }
];

const NavBar = () => {
  const location = useLocation();
  return (
    <AppBar position="sticky" sx={navBarSx.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href="https://www.google.com/search?q=Rootsly"
          target="_blank"
          rel="noopener"
          color="secondary"
          sx={navBarSx.logo}
        >
          Rootsly
        </Typography>
        <Divider orientation="vertical" flexItem sx={navBarSx.divider} />
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="nowrap"
          flexGrow={1}
        >
          {paths.map((path, i) => {
            return (
              <Button
                key={path.pathText}
                component={RouterLink}
                to={path.url}
                color="secondary"
                disableRipple
                sx={navBarSx.routeBtn(path, i, location)}
              >
                {path.pathText}
              </Button>
            );
          })}
        </Stack>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton sx={{ p: 0, mr: 1 }}>
            <Avatar
              src="https://minimaltoolkit.com/images/randomdata/male/3.jpg"
              sx={navBarSx.avatar}
            />
          </IconButton>
          <Typography
            variant="body1"
            noWrap
            component="span"
            color="secondary"
            sx={navBarSx.name}
          >
            John Doe
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
