import React from "react"
import NavBarLogo from "../NavBarLogo/NavBarLogo"
import NavPopover from "../NavPopover/NavPopover"
import { useLocation } from "react-router-dom"
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Toolbar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import HandshakeIcon from "@mui/icons-material/Handshake"
import navBarSx from "./navBarSx"
import NavLinks from "../NavLinks/NavLinks"

const paths = [
  { url: "/", pathText: "Home", Icon: HomeIcon },
  {
    url: "/friends",
    pathText: "Friends",
    Icon: HandshakeIcon
  }
]

const NavBar = () => {
  const location = useLocation()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <AppBar position="sticky" sx={navBarSx.appBar}>
      <Toolbar>

        <NavBarLogo name={'Rootsly'} />

        <Divider orientation="vertical" flexItem sx={navBarSx.divider} />

        <Stack
          direction="row"
          alignItems="center"
          flexWrap="nowrap"
          flexGrow={1}
        >
          <Typography variant="h2" color="secondary" sx={navBarSx.tagLine}>
            Explore your relationships
          </Typography>
        </Stack>

        <NavLinks paths={paths} location={location} />

        <Divider
          orientation="vertical"
          flexItem
          sx={{ ...navBarSx.divider, display: { xs: "none", md: "block" } }}
        />

        <Box sx={{ flexGrow: 0, mr: { xs: 0, xsm: 1 } }}>
          <IconButton onClick={handleClick} sx={navBarSx.avatarBtn}>
            <Avatar
              src="https://minimaltoolkit.com/images/randomdata/male/3.jpg"
              sx={navBarSx.avatar}
              alt="Avatar of the logged in user"
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

          <NavPopover
            anchorEl={anchorEl}
            handleClose={handleClose}
            location={location}
            paths={paths}
          />

        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
