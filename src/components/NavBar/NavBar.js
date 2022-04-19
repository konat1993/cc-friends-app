import React from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
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
  Link,
  Popover,
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  ListItemIcon
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import HandshakeIcon from "@mui/icons-material/Handshake"
import navBarSx from "./navBarSx"

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

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined
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
          <Typography variant="h2" color="secondary" sx={navBarSx.tagLine}>
            Explore your relationships
          </Typography>
        </Stack>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {paths.map((path, i) => {
            const lastIndex = paths.length - 1
            return (
              <Button
                key={path.pathText}
                name={`${path.pathText} route`}
                component={RouterLink}
                to={path.url}
                color="secondary"
                disableRipple
                sx={navBarSx.routeBtn(path, i, lastIndex, location)}
              >
                {path.pathText}
              </Button>
            )
          })}
        </Box>
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
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            sx={navBarSx.popover}
          >
            <List
              component="nav"
              disablePadding
              aria-label="main mailbox folders"
              sx={navBarSx.listContainer}
            >
              {paths.map((path, i) => {
                return (
                  <ListItem key={path.pathText} disablePadding>
                    <ListItemButton
                      selected={path.url === location.pathname}
                      onClick={handleClose}
                      component={RouterLink}
                      to={path.url}
                      sx={navBarSx.listItemBtn}
                    >
                      <ListItemIcon>
                        <path.Icon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={path.pathText} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
